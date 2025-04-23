
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

import 'dotenv/config';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
// Inicializar Resend con tu API key
const resend = new Resend(process.env.VITE_RESEND)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, guests, attending, dietaryRestrictions } = body

    // Validaciones básicas
    if (!name || !email) {
      return NextResponse.json({ message: "Nombre y correo electrónico son obligatorios" }, { status: 400 })
    }

    // Enviar email a los novios
    const { data, error } = await resend.emails.send({
      from: "sanchex.dev02@gmail.com",
      to: "sanchex.dev02@gmail.com", // Email de los novios
      subject: `Confirmación de asistencia: ${name}`,
      html: `
        <h1>Nueva confirmación de asistencia</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Número de invitados:</strong> ${guests}</p>
        <p><strong>¿Asistirá?:</strong> ${attending === "yes" ? "Sí" : "No"}</p>
        <p><strong>Restricciones alimenticias:</strong> ${dietaryRestrictions || "Ninguna"}</p>
      `,
    })

    if (error) {
      console.error("Error al enviar email:", error)
      return NextResponse.json({ message: "Error al enviar la confirmación" }, { status: 500 })
    }

    // Enviar email de confirmación al invitado
    if (attending === "yes") {
      await resend.emails.send({
        from: "sanchex.dev02@gmail.com",
        to: email,
        subject: "¡Gracias por confirmar tu asistencia!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #d4af37; text-align: center;">¡Gracias por confirmar tu asistencia!</h1>
            <p>Hola ${name},</p>
            <p>Estamos muy felices de que nos acompañes en nuestro día especial. Hemos recibido tu confirmación para ${guests} ${Number.parseInt(guests) === 1 ? "persona" : "personas"}.</p>
            <div style="background-color: #faf7f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #b8860b; margin-top: 0;">Detalles del evento:</h3>
              <p><strong>Fecha:</strong> 12 de Junio, 2025</p>
              <p><strong>Ceremonia:</strong> 16:00 hrs - Catedral Metropolitana</p>
              <p><strong>Recepción:</strong> 18:00 hrs - Hacienda Los Olivos</p>
            </div>
            <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
            <p>¡Nos vemos pronto!</p>
            <p style="text-align: center; margin-top: 30px; color: #b8860b;">Ana & Juan</p>
          </div>
        `,
      })
    } else {
      await resend.emails.send({
        from: "sanchex.dev02@gmail.com",
        to: email,
        subject: "Hemos recibido tu respuesta",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #d4af37; text-align: center;">Hemos recibido tu respuesta</h1>
            <p>Hola ${name},</p>
            <p>Lamentamos que no puedas acompañarnos en nuestro día especial. Agradecemos mucho que nos hayas informado.</p>
            <p>Si tus planes cambian, no dudes en contactarnos.</p>
            <p style="text-align: center; margin-top: 30px; color: #b8860b;">Ana & Juan</p>
          </div>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error en la API de RSVP:", error)
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 })
  }
}
