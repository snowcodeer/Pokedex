// components/FunCard.tsx
import React from 'react';

type FunCardProps = {
  title: string;
  icon?: React.ReactNode;
  gradient?: string;
  children: React.ReactNode;
};

export default function FunCard({ title, icon, gradient = "to right, #43cea2, #185a9d", children }: FunCardProps) {
  return (
    <div className="fun-card mb-4" style={{ background: `linear-gradient(${gradient})` }}>
      <div className="fun-card-header">
        {icon && <span className="fun-card-icon">{icon}</span>}
        <h5 className="mb-0">{title}</h5>
      </div>
      <div className="fun-card-body">
        {children}
      </div>
    </div>
  );
}
