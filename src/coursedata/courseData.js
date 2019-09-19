const data = [
  {
    id: 1,
    noOfLearners: 0,
    title: "HTML",
    courseContent: [
      {
        lesson: 1,
        title:
          "Display your family information with background and other formatting.",
        content: `
<!DOCTYPE html>
<html>
<head> 
  <title> Family information </title> 
</head> 
<body bgcolor="lightgreen" text="blue"> 
    <p> My name is Abhishek Sharma my Family information is - Father Name - Shri R.K. Sharma Mother Name - ShrimatiAnjulata Sharma Brother Name - Ashish Sharma Sister Name - Richa Sharma 
    </p> 
</body> 
</html>`
      },
      {
        lesson: 2,
        title: "HTML Formatting",
        content: `
<!DOCTYPE html>
<html>
    <head>
      <title>Bold Text Example</title>
    </head>        
    <body>
      <p>The following word uses a <b>bold</b> typeface.</p>
      <p>The following word uses an <i>italicized</i> typeface.</p>
      <p>The following word uses an <u>underlined</u> typeface.</p>
      <p>The following word uses a <strike>strikethrough</strike> typeface.</p>
      <p>The following word uses a <big>big</big> typeface.</p>
      <p>The following word uses a <small>small</small> typeface.</p>
    </body>      
</html>`
      }
    ]
  }
];
export default data;
