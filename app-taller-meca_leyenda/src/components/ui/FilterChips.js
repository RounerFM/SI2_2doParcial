import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

export default function FilterChips({ options, value, onChange, className = '' }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className={className}
      style={{ flexGrow: 0, flexShrink: 0 }}
      contentContainerStyle={{ paddingHorizontal: 16, gap: 8, alignItems: 'center' }}
    >
      {options.map((opt) => {
        const active = value === opt.value;
        return (
          <Pressable
            key={opt.value}
            onPress={() => onChange(opt.value)}
            className={`px-4 py-2 rounded-none border ${
              active ? 'bg-primary-600 border-primary-600' : 'bg-dark-100/80 border-primary-200'
            }`}
          >
            <Text
              className={`text-sm font-semibold ${active ? 'text-white' : 'text-dark-600'}`}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
