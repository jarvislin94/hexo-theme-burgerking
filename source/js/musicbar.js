class MusicBar {
  musicbarEle = null;
  flag = false;
  audio = null;
  playing = false;
  control = null;
  constructor({ url, thumb }) {
    this.url = url;
    this.thumb = thumb;
    document.body.addEventListener("mouseup", (e) => this.onDragEnd(e));
  }
  mainColor = "#fff";

  barStyle = `
    width: 60px; 
    height: 60px; 
    border-radius: 50%; 
    position: absolute;
    cursor: move;
    bottom: 88px;
    left: 50px;
    background-color: #000;
    background-size: contain;
  `;

  // imgStyle = `width: 100%;height: 100%; background: #c0392b; border-radius: 50%`;

  spanStyle = `
    height: 30px;
    width: 30px;
    display: block;
    margin: 60 auto;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  leftStyle = `
    height: 100%;
    float: left;
    background-color: ${this.mainColor};
    width: 36%;
    transition: all 0.25s ease;
    overflow: hidden;`;

  trangle1Style = `
    transform: translate(0, -100%);
  `;

  trangle2Style = `
  transform: translate(0, 100%);
`;

  trangleStyle = `
     position: absolute;
     top: 0;
     right: 0;
     background-color: transparent;
     width: 0;
     height: 0;
     border-right: 30px solid #000;
     border-top: 15px solid transparent;
     border-bottom: 15px solid transparent;
     transition: transform 0.25s ease;
   `;

  rightStyle = `
     height: 100%;
     float: right;
     width: 36%;
     background-color: ${this.mainColor};
     transition: all 0.25s ease;
   `;

  pausedLeftStyle = `
     width: 50;
   `;
  pausedRightStyle = `
     width: 50%;
   `;
  pausedTriangle1Style = `
     transform: translate(0, -50%);
   `;
  pausedTriangle2Style = `
     transform: translate(0, 50%)
    `;

  createVideo() {
    const audio = document.createElement("audio");
    audio.src = this.url;
    audio.autoplay = false;
    this.audio = audio;
    const div = document.createElement("div");
    div.id = "musicbar";
    div.style = this.barStyle;
    const img = document.createElement("div");
    img.style = this.imgStyle;
    img.draggable = false;
    const control = document.createElement("a");
    control.style = this.spanStyle;
    control.className = this.playing ? "paused" : "";
    control.innerHTML = `
      <div class="left" style="${this.leftStyle}"></div>
      <div class="right" style="${this.rightStyle}"></div>
      <div class="trangle-1" style="${
        this.trangle1Style + " " + this.trangleStyle
      }"></div>
      <div class="trangle-2" style="${
        this.trangle2Style + " " + this.trangleStyle
      }"></div>
    `;
    control.onclick = (e) => this.onPlaying(e);
    div.appendChild(img);
    div.appendChild(control);
    div.onmousedown = (e) => this.onDragClick(e);
    document.body.appendChild(div);
    this.musicbarEle = div;
    this.control = control;
  }

  onPlaying(e) {
    if (this.playing) {
      this.audio.pause();
      this.playing = false;
    } else {
      this.audio.play();
      this.playing = true;
    }
    this.render();
  }

  onDragClick(e) {
    this.flag = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    if (this.musicbarEle.style.transform) {
      const translate = this.musicbarEle.style.transform
        .replace("translate3d(", "")
        .replace(")", "")
        .split(", ");
      this.barX = parseInt(translate[0]);
      this.barY = parseInt(translate[1]);
    } else {
      this.barX = 0;
      this.barY = 0;
    }
    document.body.addEventListener("mousemove", this.onDragStart);
  }

  onDragStart = (e) => {
    if (this.flag) {
      const nx = e.clientX - this.startX;
      const ny = e.clientY - this.startY;
      const x = this.barX + nx;
      const y = this.barY + ny;
      this.musicbarEle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };

  onDragEnd(e) {
    this.flag = false;
    document.body.removeEventListener("mouseover", this.onDragStart);
  }

  render() {
    this.control.className = this.playing ? "paused" : "";
  }
}
