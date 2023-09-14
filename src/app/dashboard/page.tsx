"use client"
import React from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  if (!user) router.push('/');

  return (
    <div>Dashboard</div>
  )
}
