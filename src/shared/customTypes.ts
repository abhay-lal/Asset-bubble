export type User = {
  name: string;
  email: string;
  password: string;
};

export type UserUpdate = {
  name?: string;
  email?: string;
  password?: string;
  domain?: string;
  designation?: string;
  isEmailVerified?: boolean;
};

export type Comment = {
  message: string;
};

export type CommentUpdate = {
  message?: string;
};

export type History = {
  user: string;
  cpi: number;
  pe: number;
  open: number;
  high: number;
  low: number;
  close: number;
  industrialProduction: number;
  treasury: number;
  crash: number;
  year: number;
  month: number;
};

export type HistoryUpdate = {
  user?: string;
  cpi?: number;
  pe?: number;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
  industrialProduction?: number;
  treasury?: number;
  crash?: number;
  year?: number;
  month?: number;
};

export type Stat = {
  totalClicks: number;
  bearishClicks: number;
};

export type StatUpdate = {
  totalClicks?: number;
  bearishClicks?: number;
};
