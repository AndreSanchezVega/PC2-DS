export type ReportType = {
  id: string;
  title: string;
  description: string;
  active: boolean;
  iconKey:
    | "baches"
    | "basura"
    | "poste"
    | "semaforo"
    | "vereda"
    | "senalizacion";
};

export const REPORT_TYPES: ReportType[] = [
  {
    id: "baches",
    title: "Baches",
    description: "Reporta daños en pistas, huecos o deterioro del pavimento.",
    active: true,
    iconKey: "baches"
  },
  {
    id: "basura",
    title: "Basura acumulada",
    description: "Comunica puntos con residuos acumulados en la vía pública.",
    active: false,
    iconKey: "basura"
  },
  {
    id: "poste",
    title: "Poste de luz malogrado",
    description: "Informa fallas de alumbrado público o postes deteriorados.",
    active: false,
    iconKey: "poste"
  },
  {
    id: "semaforo",
    title: "Semáforo malogrado",
    description: "Reporta semáforos apagados, dañados o con fallas visibles.",
    active: false,
    iconKey: "semaforo"
  },
  {
    id: "vereda",
    title: "Vereda rota",
    description: "Reporta veredas dañadas que dificultan el tránsito peatonal.",
    active: false,
    iconKey: "vereda"
  },
  {
    id: "senalizacion",
    title: "Señalización dañada",
    description: "Comunica señales viales deterioradas, caídas o ilegibles.",
    active: false,
    iconKey: "senalizacion"
  }
];