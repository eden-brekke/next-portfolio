import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';

export default function Navbar(){
  const router = useRouter();
  console.log(router.asPath)
  const {theme, setTheme } = useTheme();
  const [mounted, setMounted] =useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
}