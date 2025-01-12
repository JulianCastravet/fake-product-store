import { UserComment } from 'src/models/UserComment.model';

export function getRandomComments(
  comments: UserComment[],
  number: number
): UserComment[] {
  if (!comments || !number) return [];
  let arrayOfNumbers = [];
  let arrayOfComments = [];

  for (let i = 0; i <= number; i++) {
    arrayOfNumbers.push(Math.floor(Math.random() * 10));
  }

  for (let j = 0; j <= arrayOfNumbers.length; j++) {
    arrayOfComments.push(comments[arrayOfNumbers[j]]);
  }

  return arrayOfComments;
}
