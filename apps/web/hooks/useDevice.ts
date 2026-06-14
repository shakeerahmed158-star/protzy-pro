"use client";

import { useMemo, useState } from "react";

interface UseDeviceProps {
  devices: string[];
}

export function useDevice({
  devices,
}: UseDeviceProps) {
  // =========================
  // STATES
  // =========================

  const [search, setSearch] = useState("");
  const [selectedDevice, setSelectedDevice] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");

  // =========================
  // FILTER DEVICES
  // =========================

  const filteredDevices = useMemo(() => {
    return devices.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [devices, search]);

  // =========================
  // ACTIONS
  // =========================

  const selectDevice = (device: string) => {
    setSelectedDevice(device);
  };

  const selectRam = (ram: string) => {
    setSelectedRam(ram);
  };

  const selectStorage = (storage: string) => {
    setSelectedStorage(storage);
  };

  // =========================
  // RETURN
  // =========================

  return {
    // states
    search,
    selectedDevice,
    selectedRam,
    selectedStorage,

    // setters
    setSearch,

    // computed
    filteredDevices,

    // actions
    selectDevice,
    selectRam,
    selectStorage,
  };
}