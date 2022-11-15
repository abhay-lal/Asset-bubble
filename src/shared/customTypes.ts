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
  cpi: string;
  pe: string;
  open: string;
  high: string;
  low: string;
  close: string;
  industrialProduction: string;
  treasury: string;
  crash: string;
  year: string;
  month: string;
};

export type HistoryUpdate = {
  user?: string;
  cpi?: string;
  pe?: string;
  open?: string;
  high?: string;
  low?: string;
  close?: string;
  industrialProduction?: string;
  treasury?: string;
  crash?: string;
  year?: string;
  month?: string;
};

export type Stat = {
  totalClicks: string;
  bearishClicks: string;
};

export type StatUpdate = {
  totalClicks?: string;
  bearishClicks?: string;
};
