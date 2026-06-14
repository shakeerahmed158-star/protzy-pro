"use client";

import { useEffect, useState } from "react";

interface UsePriceProps {
  apiUrl: string;
  query: string;
}

export function usePrice({
  apiUrl,
  query,
}: UsePriceProps) {
  // =========================
  // STATES
  // =========================

  const [loading, setLoading] = useState(true);

  const [finalPrice, setFinalPrice] = useState(0);

  const [animatedPrice, setAnimatedPrice] = useState(0);

  const [error, setError] = useState("");

  // =========================
  // FETCH PRICE
  // =========================

  useEffect(() => {
    async function fetchPrice() {
      try {
        setLoading(true);

        setError("");

        const url = `${apiUrl}/price?${query}`;

        console.log("PRICE API URL 👉", url);

        const response = await fetch(url);

        const data = await response.json();

        console.log("PRICE RESPONSE 👉", data);

        const price = Number(data?.finalPrice || 0);

        setFinalPrice(price);
      } catch (err) {
        console.log("PRICE FETCH ERROR:", err);

        setError("Failed to fetch price");

        setFinalPrice(0);
      } finally {
        setLoading(false);
      }
    }

    if (query) {
      fetchPrice();
    }
  }, [apiUrl, query]);

  // =========================
  // PRICE ANIMATION
  // =========================

  useEffect(() => {
    if (finalPrice <= 0) {
      setAnimatedPrice(0);
      return;
    }

    let current = 0;

    const step = Math.ceil(finalPrice / 40);

    const timer = setInterval(() => {
      current += step;

      if (current >= finalPrice) {
        current = finalPrice;

        clearInterval(timer);
      }

      setAnimatedPrice(current);
    }, 25);

    return () => clearInterval(timer);
  }, [finalPrice]);

  // =========================
  // RETURN
  // =========================

  return {
    loading,
    finalPrice,
    animatedPrice,
    error,
  };
}