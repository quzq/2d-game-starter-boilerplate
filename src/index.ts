const main = (viewport: HTMLCanvasElement): void => {
  const ctx = viewport.getContext("2d");
  if (!ctx) return;
  console.log("hello! developer world");
};
main(document.getElementById("viewport") as HTMLCanvasElement);
