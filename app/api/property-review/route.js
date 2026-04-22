import { NextResponse } from 'next/server';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      area,
      propertyType,
      rooms,
      furnished,
      message,
      language,
    } = body ?? {};

    if (!name || !email || !area || !propertyType) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const { error } = await supabaseAdmin.from('property_reviews').insert([
      {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: phone ? String(phone).trim() : null,
        area: String(area).trim(),
        property_type: String(propertyType).trim(),
        rooms: rooms ? String(rooms).trim() : null,
        furnished: furnished ? String(furnished).trim() : null,
        message: message ? String(message).trim() : null,
        language: language ? String(language).trim() : 'en',
        source: 'bnbops_contact_form',
      },
    ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Could not save form submission.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Unexpected server error.' },
      { status: 500 }
    );
  }
}