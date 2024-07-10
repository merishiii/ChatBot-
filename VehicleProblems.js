// VehicleProblems.js

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const problemsData = [
  { id: '1', problem: 'Engine Overheating', solution: 'Check coolant level, radiator, and fan' },
  { id: '2', problem: 'Brakes Squeaking', solution: 'Inspect brake pads and rotors, replace if necessary' },
  { id: '3', problem: 'Battery Dead', solution: 'Check battery connections, charge or replace battery' },
  { id: '4', problem: 'Transmission Slipping', solution: 'Check transmission fluid level, inspect for leaks, and perform a transmission flush if needed' },
  { id: '5', problem: 'Tire Puncture', solution: 'Remove the tire, inspect for puncture, repair if possible, or replace with a spare tire' },
  { id: '6', problem: 'Air Conditioning Not Working', solution: 'Check refrigerant level, inspect for leaks, and recharge the AC system if needed' },
  { id: '7', problem: 'Headlights Not Working', solution: 'Check bulbs, fuses, and wiring connections, replace faulty components as needed' },
  { id: '8', problem: 'Power Steering Fluid Leaking', solution: 'Inspect power steering hoses and connections, replace if damaged, and refill fluid' },
  { id: '9', problem: 'Engine Misfiring', solution: 'Check spark plugs, ignition coils, and fuel injectors, and replace faulty components' },
  { id: '10', problem: 'Exhaust Smoke', solution: 'Blue smoke indicates burning oil, white smoke indicates coolant leak, black smoke indicates rich fuel mixture, diagnose and repair accordingly' },
  { id: '11', problem: 'Car Won\'t Start', solution: 'Check battery charge, starter motor, ignition switch, and fuel system for issues' },
  { id: '12', problem: 'Dashboard Warning Lights On', solution: 'Consult vehicle manual for specific warning light meanings, diagnose and address issues accordingly' },
  { id: '13', problem: 'Rough Idle', solution: 'Check air filter, fuel injectors, and throttle body for issues, clean or replace components as necessary' },
  { id: '14', problem: 'Excessive Exhaust Noise', solution: 'Inspect exhaust system for leaks, damaged muffler, or loose components, repair or replace as needed' },
  { id: '15', problem: 'Vehicle Pulling to One Side', solution: 'Check tire pressure, wheel alignment, and suspension components for issues, adjust or replace as needed' },
  { id: '16', problem: 'Stiff Gear Shifting', solution: 'Check clutch fluid level, inspect clutch pedal and cable for issues, bleed clutch system if necessary' },
  { id: '17', problem: 'Windshield Wipers Not Working', solution: 'Check wiper blades, wiper motor, and fuses for issues, replace faulty components as needed' },
  { id: '18', problem: 'Engine Stalling', solution: 'Check fuel pump, air filter, and ignition system for issues, diagnose and repair as needed' },
  { id: '19', problem: 'High Fuel Consumption', solution: 'Check tire pressure, air filter, and oxygen sensor for issues, perform maintenance and drive more efficiently to improve fuel economy' },
  { id: '20', problem: 'Strange Smells Inside the Vehicle', solution: 'Inspect cabin air filter, air conditioning system, and interior components for mold, leaks, or other issues, clean or replace as needed' },
  // Add more problems and solutions as needed
];

const VehicleProblems = () => {
  const renderProblem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.problem}>{item.problem}</Text>
      <Text style={styles.solution}>{item.solution}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={problemsData}
        renderItem={renderProblem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  problem: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  solution: {
    fontSize: 16,
  },
});

export default VehicleProblems;
