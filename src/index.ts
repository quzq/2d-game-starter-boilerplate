const main = (viewport: HTMLCanvasElement): void => {
  const ctx = viewport.getContext("2d");
  if (!ctx) return;

  const loop = (time: number): void => {
    //
    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};
main(document.getElementById("viewport") as HTMLCanvasElement);
