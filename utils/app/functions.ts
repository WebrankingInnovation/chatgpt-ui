export function createAlias(name: string | null | undefined) {
  if (!name) return '';

  // Dividi la stringa in nome e cognome
  const [firstName, lastName] = name.split(' ');

  // Prendi le prime tre lettere del nome e del cognome
  const alias = (firstName.slice(0, 3) + lastName.slice(0, 3)).toUpperCase();

  return alias;
}
