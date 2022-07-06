export const MISSIONS = [
  { id: 0, playerCount: 2, status: '' },
  { id: 1, playerCount: 3, status: '' },
  { id: 2, playerCount: 2, status: '' },
  { id: 3, playerCount: 3, status: '' },
  { id: 4, playerCount: 3, status: '' },
];
export const PLAYERS = [
  { id: 0, name: 'Darren',  isResistance: false,  selected: false, teamVote: '',        missionVote: ''        },
  { id: 1, name: 'Clarisa', isResistance: true,   selected: false, teamVote: 'approve', missionVote: 'success' },
  { id: 2, name: 'Shan',    isResistance: true,   selected: false, teamVote: 'approve', missionVote: 'success' },
  { id: 3, name: 'Eman',    isResistance: true,   selected: false, teamVote: 'reject',  missionVote: 'success' },
  { id: 4, name: 'Gran',    isResistance: false,  selected: false, teamVote: 'reject',  missionVote: 'fail'    },
];
export const DIALOG = 'team-select';
export const RECALLS = 0;
export const PLAYER_ID = 0;
export const PLAYER_IN_TURN = 0;