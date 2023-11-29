export interface Result {
  grandPrix: string,
  date: Date,
  winner: string,
  team: string,
  laps: number,
  podium: string[]
}

export const ressults: Result[] = [
  {
    grandPrix: 'Bahrain',
    date: new Date('28 Mar 2021'),
    winner: 'Lewis Hamilton',
    team: 'Mercedes',
    laps: 56,
    podium: ['Lewis Hamilton', 'Max Verstappen', 'Valtteri Bottas']
  },
  {
    grandPrix: 'Emilia Romagna',
    date: new Date('18 Apr 2021'),
    winner: 'Max Verstappen',
    team: 'Red Bull Racing Honda',
    laps: 63,
    podium: ['Max Verstappen', 'Lewis Hamilton', 'Lando Norris']
  },
  {
    grandPrix: 'Portugal',
    date: new Date('02 May 2021'),
    winner: 'Lewis Hamilton',
    team: 'Mercedes',
    laps: 66,
    podium: ['Lewis Hamilton', 'Max Verstappen', 'Valtteri Bottas']
  },
  {
    grandPrix: 'Spain',
    date: new Date('09 May 2021'),
    winner: 'Lewis Hamilton',
    team: 'Mercedes',
    laps: 66,
    podium: ['Lewis Hamilton', 'Max Verstappen', 'Valtteri Bottas']
  },
  {
    grandPrix: 'Monaco',
    date: new Date('23 May 2021'),
    winner: 'Max Verstappen',
    team: 'Red Bull Racing Honda',
    laps: 78,
    podium: ['Max Verstappen', 'Carlos Sainz', 'Lando Norris']
  },
  {
    grandPrix: 'Azerbaijan',
    date: new Date('06 Jun 2021'),
    winner: 'Sergio Perez',
    team: 'Red Bull Racing Honda',
    laps: 51,
    podium: ['Sergio Perez', 'Sebastian Vettel', 'Pierre Gasly']
  },
  {
    grandPrix: 'France',
    date: new Date('20 Jun 2021'),
    winner: 'Max Verstappen',
    team: 'Red Bull Racing Honda',
    laps: 53,
    podium: ['Max Verstappen', 'Lewis Hamilton', 'Sergio Perez']
  },
  {
    grandPrix: 'Styria',
    date: new Date('27 Jun 2021'),
    winner: 'Max Verstappen',
    team: 'Red Bull Racing Honda',
    laps: 71,
    podium: ['Max Verstappen', 'Lewis Hamilton', 'Valtteri Bottas']
  },
  {
    grandPrix: 'Austria',
    date: new Date('04 Jul 2021'),
    winner: 'Max Verstappen',
    team: 'Red Bull Racing Honda',
    laps: 71,
    podium: ['Max Verstappen', 'Valtteri Bottas', 'Lando Norris']
  },
  {
    grandPrix: 'Great Britain',
    date: new Date('18 Jul 2021'),
    winner: 'Lewis Hamilton',
    team: 'Mercedes',
    laps: 52,
    podium: ['Lewis Hamilton', 'Charles Leclerc', 'Valtteri Bottas']
  },
  {
    grandPrix: 'Hungary',
    date: new Date('01 Aug 2021'),
    winner: 'Esteban Ocon',
    team: 'Alpine Renault',
    laps: 70,
    podium: ['Esteban Ocon', 'Sebastian Vettel', 'Lewis Hamilton']
  },
  {
    grandPrix: 'Belgium',
    date: new Date('29 Aug 2021'),
    winner: 'Max Verstappen',
    team: 'Red Bull Racing Honda',
    laps: 1,
    podium: ['Max Verstappen', 'George Russell', 'Lewis Hamilton']
  },
  {
    grandPrix: 'Netherlands',
    date: new Date('05 Sep 2021'),
    winner: 'Max Verstappen',
    team: 'Red Bull Racing Honda',
    laps: 72,
    podium: ['Max Verstappen', 'Lewis Hamilton', 'Valtteri Bottas']
  },
  {
    grandPrix: 'Italy',
    date: new Date('12 Sep 2021'),
    winner: 'Daniel Ricciardo',
    team: 'McLaren Mercedes',
    laps: 53,
    podium: ['Daniel Ricciardo', 'Lando Norris', 'Valtteri Bottas']
  },
  {
    grandPrix: 'Russia',
    date: new Date('26 Sep 2021'),
    winner: 'Lewis Hamilton',
    team: 'Mercedes',
    laps: 53,
    podium: ['Lewis Hamilton', 'Max Verstappen', 'Carlos Sainz']
  }
];
