export type ReportSeverity = "Leve" | "Moderado" | "Crítico" | "No determinada";

export type ReportStatus =
  | "Recibido"
  | "En revisión"
  | "En proceso"
  | "Resuelto"
  | "Rechazado";

export type ReportCoords = {
  x: number;
  y: number;
  lat: number;
  lng: number;
};

export type PotholeReport = {
  id: string;
  type: "Bache";
  description: string;
  imageUrl: string;
  address: string;
  distrito: string;
  coords: ReportCoords;
  severity: ReportSeverity;
  confidence: number;
  status: ReportStatus;
  createdAt: string;
};

const REPORTS_KEY = "urbanet_reports";
const PENDING_REPORT_KEY = "urbanet_pending_report";
const LAST_REPORT_KEY = "urbanet_last_report";

export function getStoredReports(): PotholeReport[] {
  const rawReports = localStorage.getItem(REPORTS_KEY);

  if (!rawReports) {
    return [];
  }

  try {
    return JSON.parse(rawReports) as PotholeReport[];
  } catch {
    return [];
  }
}

export function saveReport(report: PotholeReport): PotholeReport[] {
  const reports = getStoredReports();
  const updatedReports = [report, ...reports];

  localStorage.setItem(REPORTS_KEY, JSON.stringify(updatedReports));
  localStorage.setItem(LAST_REPORT_KEY, JSON.stringify(report));
  localStorage.removeItem(PENDING_REPORT_KEY);

  return updatedReports;
}

export function setPendingReport(report: PotholeReport) {
  localStorage.setItem(PENDING_REPORT_KEY, JSON.stringify(report));
}

export function getPendingReport(): PotholeReport | null {
  const rawReport = localStorage.getItem(PENDING_REPORT_KEY);

  if (!rawReport) {
    return null;
  }

  try {
    return JSON.parse(rawReport) as PotholeReport;
  } catch {
    return null;
  }
}

export function getLastReport(): PotholeReport | null {
  const rawReport = localStorage.getItem(LAST_REPORT_KEY);

  if (!rawReport) {
    return null;
  }

  try {
    return JSON.parse(rawReport) as PotholeReport;
  } catch {
    return null;
  }
}

export function generateReportId() {
  const randomNumber = Math.floor(1000 + Math.random() * 9000);
  return `URB-2026-${randomNumber}`;
}

export function getRandomSeverity(): {
  severity: ReportSeverity;
  confidence: number;
} {
  const options: ReportSeverity[] = [
    "Leve",
    "Moderado",
    "Crítico",
    "No determinada"
  ];

  const severity = options[Math.floor(Math.random() * options.length)];

  const confidence =
    severity === "No determinada"
      ? Number((0.42 + Math.random() * 0.17).toFixed(2))
      : Number((0.72 + Math.random() * 0.22).toFixed(2));

  return {
    severity,
    confidence
  };
}