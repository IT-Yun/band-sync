function parseMeter(m) {
  const mm = String(m || '4/4').match(/^(\d+)\/(\d+)(?:\((.+)\))?$/) || ['', '4', '4'];
  const beats = +mm[1], denom = +mm[2];
  let groups;
  if (mm[3]) groups = mm[3].split('+').map(Number);
  else if (denom === 8 && beats % 3 === 0 && beats >= 6) groups = Array(beats / 3).fill(3);
  else groups = [beats];
  const noteSym = denom === 2 ? '𝅗𝅥' : denom === 8 ? '♪' : '♩';
  return { beats, denom, groups, noteSym };
}
const groupStarts = (groups) => { const s = new Set(); let i = 0; for (const g of groups) { s.add(i); i += g; } return s; };
export { parseMeter, groupStarts };
