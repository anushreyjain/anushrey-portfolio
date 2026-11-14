'use server'

import { headers } from 'next/headers';
import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

const EMAIL_RE = /^[^\s@<>()",;:\\]+@[^\s@<>()",;:\\]+\.[^\s@<>()",;:\\]{2,}$/

// Basic per-IP rate limit (best effort, resets on cold start).
const hits = new Map()
const WINDOW_MS = 10 * 60 * 1000
const MAX_HITS = 3

const limited = (ip) => {
    const now = Date.now()
    const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
    recent.push(now)
    hits.set(ip, recent)
    if (hits.size > 500) {
        for (const [k, v] of hits) if (!v.some((t) => now - t < WINDOW_MS)) hits.delete(k)
    }
    return recent.length > MAX_HITS
}

export const sendEmail = async (formData) => {
    // Honeypot: real users never fill this hidden field.
    if (formData.get('website')) {
        return { data: { ok: true } }
    }

    const h = headers()
    const ip = (h.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
    if (limited(ip)) {
        return { error: 'Too many messages. Please try again in a few minutes.' }
    }

    const senderEmail = formData.get('senderEmail')
    const message = formData.get('senderMessage')

    if (!validateString(senderEmail, 254) || !EMAIL_RE.test(senderEmail.trim())) {
        return { error: 'Invalid sender email' }
    }

    if (!validateString(message, 5000) || message.trim().length < 5) {
        return { error: 'Invalid message' }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'anushrey1998@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail.trim(),
            text: message.trim()
        });
    } catch (error) {
        console.error('sendEmail failed:', getErrorMessage(error))
        return { error: 'Something went wrong. Please try again later.' }
    }

    return { data }
};
