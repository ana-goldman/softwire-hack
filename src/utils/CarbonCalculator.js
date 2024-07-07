export const carbonCalculator = (memoryKB, runtimeMs) => {
  const memoryMB = memoryKB / 1024; // Convert KB to MB
  const co2FromMemory = memoryMB * 20; // CO2 emissions from memory
  const co2FromRuntime = runtimeMs * 0.01; // CO2 emissions from runtime
  const totalCo2 = co2FromMemory + co2FromRuntime; // Total CO2 emissions
  return totalCo2.toFixed(2); // Return total CO2 emissions rounded to 2 decimal
};

// 1MB is 20G of CO2
// 1ms of runtime is 0.01G of CO2
