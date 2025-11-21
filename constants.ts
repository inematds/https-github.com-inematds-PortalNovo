import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Power BI para Análise de Dados Corporativos',
    description: 'Transforme dados brutos em insights visuais. Domine DAX, Power Query e criação de Dashboards executivos para tomada de decisão.',
    instructor: 'Ricardo Santos',
    duration: '16h 00m',
    category: 'Produtividade',
    thumbnail: 'https://picsum.photos/id/445/800/600', // Tech/Monitor vibe
    rating: 4.9,
    students: 15400,
    modules: [
      { title: 'ETL com Power Query', lessons: ['Conexão de Fontes', 'Limpeza de Dados', 'Modelagem Estrela'] },
      { title: 'Fórmulas DAX', lessons: ['Medidas vs Colunas', 'Funções de Tempo', 'Contexto de Linha'] },
      { title: 'Visualização', lessons: ['Storytelling com Dados', 'Layouts Corporativos', 'Publicação na Nuvem'] }
    ]
  },
  {
    id: '2',
    title: 'Administração Windows Server Híbrido',
    description: 'Preparatório para ambientes On-Premise e Nuvem. Gerenciamento de AD DS, DNS, DHCP e integração com Azure.',
    instructor: 'Carlos "SysAdmin" Souza',
    duration: '40h 00m',
    category: 'Infraestrutura',
    thumbnail: 'https://picsum.photos/id/2/800/600', // Laptop/Server vibe
    rating: 4.8,
    students: 8300,
    modules: [
      { title: 'Deploy e Gerenciamento', lessons: ['Instalação Server Core', 'Windows Admin Center', 'PowerShell Remoting'] },
      { title: 'Serviços de Rede', lessons: ['DNS Zones', 'DHCP Failover', 'VPN & DirectAccess'] },
      { title: 'Identidade', lessons: ['Active Directory DS', 'Group Policy (GPO)', 'Azure AD Connect'] }
    ]
  },
  {
    id: '3',
    title: 'ITIL® 4 Foundation: Gestão de Serviços',
    description: 'Compreenda as melhores práticas globais para gerenciamento de serviços de TI. Foco na criação de valor e alinhamento estratégico.',
    instructor: 'Fabiana Mello',
    duration: '12h 00m',
    category: 'Gestão',
    thumbnail: 'https://picsum.photos/id/3/800/600', // Corporate/Meeting
    rating: 4.7,
    students: 12100,
    modules: [
      { title: 'Conceitos Chave', lessons: ['Criação de Valor', '4 Dimensões', 'SVS - Sistema de Valor'] },
      { title: 'Práticas de Gerenciamento', lessons: ['Service Desk', 'Gestão de Incidentes', 'Gestão de Mudanças'] },
      { title: 'Melhoria Contínua', lessons: ['Modelo de Melhoria', 'Princípios Orientadores'] }
    ]
  },
  {
    id: '4',
    title: 'Excel Avançado para Negócios',
    description: 'Vá além do básico. Tabelas dinâmicas, macros, VBA e funções complexas para automação de planilhas empresariais.',
    instructor: 'Roberto Tech',
    duration: '20h 00m',
    category: 'Produtividade',
    thumbnail: 'https://picsum.photos/id/48/800/600', // Laptop/Work
    rating: 4.9,
    students: 25200,
    modules: [
      { title: 'Funções Lógicas e Busca', lessons: ['SE/E/OU Aninhados', 'XLOOKUP vs PROCV', 'ÍNDICE & CORRESP'] },
      { title: 'Análise de Dados', lessons: ['Tabela Dinâmica Avançada', 'Segmentação de Dados', 'Gráficos Dinâmicos'] },
      { title: 'Automação', lessons: ['Gravador de Macros', 'Intro ao VBA', 'Formulários'] }
    ]
  },
  {
    id: '5',
    title: 'Scrum Master & Agile Leadership',
    description: 'Metodologias ágeis para gestão de projetos de software e alta performance. Preparação para atuar como facilitador de times ágeis.',
    instructor: 'Lúcia Helena',
    duration: '14h 30m',
    category: 'Gestão',
    thumbnail: 'https://picsum.photos/id/201/800/600', // Papers/Work
    rating: 4.6,
    students: 9100,
    modules: [
      { title: 'Mindset Ágil', lessons: ['Manifesto Ágil', 'Scrum vs Kanban', 'Papéis e Responsabilidades'] },
      { title: 'Eventos Scrum', lessons: ['Sprint Planning', 'Daily Scrum', 'Retrospective'] },
      { title: 'Artefatos', lessons: ['Product Backlog', 'User Stories', 'Definition of Done'] }
    ]
  },
  {
    id: '6',
    title: 'Lógica de Programação com Python',
    description: 'A porta de entrada para o desenvolvimento. Aprenda algoritmos, estruturas de dados e automação com a linguagem mais versátil do mercado.',
    instructor: 'Gabriel Mining',
    duration: '24h 00m',
    category: 'Desenvolvimento',
    thumbnail: 'https://picsum.photos/id/180/800/600', // Code/Laptop
    rating: 4.8,
    students: 18700,
    modules: [
      { title: 'Fundamentos', lessons: ['Variáveis e Tipos', 'Estruturas Condicionais', 'Loops (For/While)'] },
      { title: 'Estruturas de Dados', lessons: ['Listas e Tuplas', 'Dicionários', 'Manipulação de Strings'] },
      { title: 'Prática', lessons: ['Automação de Arquivos', 'Consumo de APIs', 'Projeto Final'] }
    ]
  }
];