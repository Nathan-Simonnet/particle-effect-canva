

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const myBlocksArray = {};

class CircleLineCircleBlock {
    constructor(arcX, arcY, speedX, speedY) {
        this.arcX = arcX;
        this.arcY = arcY;
        this.speedX = speedX;
        this.speedY = speedY;
        this.drawDisplayer();
    };
    drawDisplayer() {
        ctx.beginPath();
        ctx.arc(this.arcX, this.arcY, 3, 0, 6);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.closePath();
    };
    updatePosition() {
        this.arcX += this.speedX;
        this.arcY += this.speedY;

        if(this.arcX > canvas.width || this.arcX < 0){
            this.speedX = -this.speedX
        } else if(this.arcY > canvas.height || this.arcY < 0){
            this.speedY = -this.speedY;
        }
    };
}

for (let i = 0; i < 8; i++) {
    const initialPositionX = Math.floor(Math.random() * 1200);
    const initialPositionY = Math.floor(Math.random() * 800);

    const speedX = Math.random() * 6 
    const speedY = Math.random() * 6 

    // const newBlock = new CircleLineCircleBlock(initialPositionXOne, initialPositionYOne, initialPositionXTwo,initialPositionYTwo,speedX,speedY)
   myBlocksArray[`newBlock${i}`] = new CircleLineCircleBlock(initialPositionX, initialPositionY, speedX, speedY)
}

function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    Object.values(myBlocksArray).forEach(block => {
        block.updatePosition();
        block.drawDisplayer();
    });

    // Request the next frame to keep the animation going
    requestAnimationFrame(() => animate());
};

animate()

// const blockOne = new CircleLineCircleBlock(250, 90, 50,300,4,2);
// blockOne.drawDisplayer()

// ctx.beginPath();
// ctx.arc(250, 65, 3, 0, 6); // (x, y, radius, startAngle, endAngle)
// ctx.fillStyle = 'white'; // Color of the circle
// ctx.fill();
// ctx.closePath();

// // Draw the line
// ctx.beginPath();      // Start a new path
// ctx.strokeStyle = 'white';
// ctx.lineWidth = 1;
// ctx.moveTo(250, 65);   // Starting point (x, y)
// ctx.lineTo(50, 100); // Ending point (x, y)
// ctx.stroke();         // Render the line
// ctx.closePath();

// ctx.beginPath(); // Start a new path
// ctx.arc(50, 100, 3, 0, 6); // (x, y, radius, startAngle, endAngle)
// ctx.fillStyle = 'white'; // Color of the circle
// ctx.fill();
// ctx.closePath();

// const newBlock1 = {
//     arcOne: {
//         arcOneX: 250,
//         arcOneY: 250,
//     },
//     arcTwo: {
//         arcTwoX: 50,
//         arcTwoY: 100,
//     },
// }


// function chimeraDisplayer(block) {
//     ctx.beginPath();
//     ctx.arc(block.arcOne.arcOneX, block.arcOne.arcOneY, 3, 0, 6);
//     ctx.fillStyle = 'white';
//     ctx.fill();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.strokeStyle = 'white';
//     ctx.lineWidth = 1;
//     ctx.moveTo(block.arcOne.arcOneX, block.arcOne.arcOneY);
//     ctx.lineTo(block.arcTwo.arcTwoX, block.arcTwo.arcTwoY);
//     ctx.stroke();
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.arc(block.arcTwo.arcTwoX, block.arcTwo.arcTwoY, 3, 0, 6);
//     ctx.fillStyle = 'white';
//     ctx.fill();
//     ctx.closePath();
// }

// chimeraDisplayer(newBlock1)


// =======================

// Back and forth
// =================

// class CircleLineCircleBlock {
//     constructor(arcOneX, arcOneY, arcTwoX, arcTwoY, speed, direction) {
//         this.arcOneX = arcOneX;
//         this.arcOneY = arcOneY;
//         this.arcTwoX = arcTwoX;
//         this.arcTwoY = arcTwoY;
//         this.speed = speed;
//         this.direction = direction;
//     };
//     drawDisplayer() {
//         ctx.beginPath();
//         ctx.arc(this.arcOneX, this.arcOneY, 3, 0, 6);
//         ctx.fillStyle = 'white';
//         ctx.fill();
//         ctx.closePath();
    
//         ctx.beginPath();
//         ctx.strokeStyle = 'white';
//         ctx.lineWidth = 1;
//         ctx.moveTo(this.arcOneX, this.arcOneY);
//         ctx.lineTo(this.arcTwoX, this.arcTwoY);
//         ctx.stroke();
//         ctx.closePath();
    
//         ctx.beginPath();
//         ctx.arc(this.arcTwoX, this.arcTwoY, 3, 0, 6);
//         ctx.fillStyle = 'white';
//         ctx.fill();
//         ctx.closePath();
//     };
//     updatePosition() {
//         if(this.direction){
//             this.arcOneX += this.speed;
//             this.arcTwoX += this.speed;
//         } else{
//             this.arcOneX -= this.speed;
//             this.arcTwoX -= this.speed;
//         }

//         // Reset position to the left when it goes off the canvas
//         if (this.arcOneX > canvas.width || this.arcOneX < 0 || this.arcOneY > canvas.height || this.arcOneY < 0 ||this.arcTwoX > canvas.width || this.arcTwoX < 0 || this.arcTwoY > canvas.height || this.arcTwoY < 0) {
//             this.direction = !this.direction;
//         }
//     };
// }

// const blockOne = new CircleLineCircleBlock(250, 90, 50,300,8, true);
// // blockOne.drawDisplayer()

// function animate() {
//     // Clear the canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Update position and redraw the block
//     blockOne.updatePosition();
//     blockOne.drawDisplayer();

//     // Request the next frame to keep the animation going
//     requestAnimationFrame(animate);
// }

// // Start the animation
// animate(blockOne);

// =========================

// =========================
// const myBlocksArray = {};

// class CircleLineCircleBlock {
//     constructor(arcOneX, arcOneY, arcTwoX, arcTwoY, speedOneX, speedOneY, speedTwoX, speedTwoY) {
//         this.arcOneX = arcOneX;
//         this.arcOneY = arcOneY;
//         this.arcTwoX = arcTwoX;
//         this.arcTwoY = arcTwoY;
//         this.speedOneX = speedOneX;
//         this.speedOneY = speedOneY;
//         this.speedTwoX = speedTwoX;
//         this.speedTwoY = speedTwoY;
//         this.drawDisplayer();
//     };
//     drawDisplayer() {
//         ctx.beginPath();
//         ctx.arc(this.arcOneX, this.arcOneY, 3, 0, 6);
//         ctx.fillStyle = 'white';
//         ctx.fill();
//         ctx.closePath();
    
//         ctx.beginPath();
//         ctx.strokeStyle = 'white';
//         ctx.lineWidth = 1;
//         ctx.moveTo(this.arcOneX, this.arcOneY);
//         ctx.lineTo(this.arcTwoX, this.arcTwoY);
//         ctx.stroke();
//         ctx.closePath();
    
//         ctx.beginPath();
//         ctx.arc(this.arcTwoX, this.arcTwoY, 3, 0, 6);
//         ctx.fillStyle = 'white';
//         ctx.fill();
//         ctx.closePath();
//     };
//     updatePosition() {
//             this.arcOneX += this.speedOneX;
//             this.arcOneY += this.speedOneY;

//             this.arcTwoX += this.speedTwoX;
//             this.arcTwoY += this.speedTwoY; 

//         if (this.arcOneX > canvas.width || this.arcOneX < 0) {
//             this.speedOneX = -this.speedOneX;

//         } else if(this.arcOneY > canvas.height || this.arcOneY < 0) {
//             this.speedOneY = -this.speedOneY;

//         } else if(this.arcTwoX > canvas.width || this.arcTwoX <0) {
//             this.speedTwoX = -this.speedTwoX;

//         } else if(this.arcTwoY > canvas.height || this.arcTwoY <0) {
//             this.speedTwoY = -this.speedTwoY;
//         }
//     };
// }

// for (let i = 0; i < 6; i++) {
//     const initialPositionXOne = Math.floor(Math.random() * 1200);
//     const initialPositionYOne = Math.floor(Math.random() * 800);

//     const initialPositionXTwo = Math.floor(Math.random() * 1200);
//     const initialPositionYTwo = Math.floor(Math.random() * 800);

//     const speedXOne = Math.ceil(Math.random() * 6 ) 
//     const speedXTwo = Math.ceil(Math.random() * 6 ) 
//     const speedYOne = Math.ceil(Math.random() * 6 ) 
//     const speedYTwo = Math.ceil(Math.random() * 6 ) 

//     // const newBlock = new CircleLineCircleBlock(initialPositionXOne, initialPositionYOne, initialPositionXTwo,initialPositionYTwo,speedX,speedY)
//     myBlocksArray[`newBlock${i}`] = new CircleLineCircleBlock(initialPositionXOne, initialPositionYOne, initialPositionXTwo,initialPositionYTwo,speedXOne,speedYOne,speedXTwo, speedYTwo)
// }

// console.log(myBlocksArray)

// function animate() {
//     // Clear the canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     Object.values(myBlocksArray).forEach(block => {
//         block.updatePosition();
//         block.drawDisplayer();
//     });

//     // Request the next frame to keep the animation going
//     requestAnimationFrame(() => animate());
// };

// animate()