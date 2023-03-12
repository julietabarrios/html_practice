// Your task is to write function cipher that converts a regular English sentence to ciphered text.

// Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

// For example:

cipher("I HAVE A SECRET MESSAGE FOR YOU") 
// returns 
"O IQCT Q LTEKTZ DTLLQUT YGK NGX"

// After you've finished the cipher part add a new function to decipher back to English

// In this exercise we use a simple encoding mapping with English alphabet in the left column 
// and ciphered matches in the left column:

/*
  A : Q,
  B : W,
  C : E,
  D : R,
  E : T,
  F : Y,
  G : U,
  H : I,
  I : O,
  J : P,
  K : A,
  L : S,
  M : D,
  N : F,
  O : G,
  P : H,
  Q : J,
  R : K,
  S : L,
  T : Z,
  U : X,
  V : C,
  W : V,
  X : B,
  Y : N,
  Z : M
*/