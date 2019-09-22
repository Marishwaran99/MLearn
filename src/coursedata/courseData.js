var i = 1;
var i1 = 1;
var i2 = 1;
var i3 = 1;
const data = [
  {
    id: 1,
    noOfLearners: 0,
    title: "HTML",
    courseContent: [
      {
        lesson: i++,
        title: "Introduction to HTML. Create a basic HTML file",
        contents: [
          {
            code: `<html>
  <head>
    <title>The First Page</title>
  </head>
  <body>
    Hello World
  </body>
</html>`,
            description: `Hyper Text Markup Language is a set of logical codes (markup) in parentheses that constitute the appearance of a web document and the information it contains. It is a language for creating static web pages. 
        
It specifies how the contents are to be presented on the web page. HTML is not a case
sensitive language so; HTML and html both are same.

HTML is a text document with formatting codes and this document has the suffix “.html” or “.htm”.

Basic HTML Document

An element called HTML surrounds the whole document. This element contains two sub-elements,
HEAD and BODY. These elements are required to form any HTML document.
        `
          }
        ]
      },
      {
        lesson: i++,
        title:
          "Display your family information with background and other formatting.",
        contents: [
          {
            code: `
<!DOCTYPE html>
<html>
  <head> 
    <title> Family information </title> 
  </head> 
  <body bgcolor="lightgreen" text="blue"> 
      <p> My name is XYZ  my Family information is - Father Name - ABC Mother Name - DEF Brother Name - IJK Sister Name - MNO
      </p> 
  </body> 
</html>`
          }
        ]
      },
      {
        lesson: i++,
        title: `Create a static webpage using table tags of HTML`,
        contents: [
          {
            code: `<html>
  <body>
    <TABLE BORDER="1" CELLPADDING="2">
      <CAPTION ALIGN="Top"><b>Specification Table with Hours
      and Marks<CAPTION>
      <TR>
        <TH ROWSPAN="2">Unit No.</TH>
        <TH ROWSPAN="2">Unit Title</TH>
        <TH ROWSPAN="2">Teaching Hours</TH>
        <TH Colspan="4">Distribution of Theory Marks</TH>
      </TR>
      <TR>
        <TD>R Level </TD>
        <TD>U Level </TD>
        <TD>A Level </TD>
        <TD>Total Marks </TD>
      </TR>
      <TR>
      <TD> <center>I </TD>
      <TD>Introduction to Internet Technology</TD>
      <TD><center>2</TD>
      <TD><center>4</TD>
      <TD><center>4</TD>
      <TD><center>0</TD>
      <TD><center>8</TD>
      </TR>
      <TR>
        <TD> <center>II </TD>
        <TD>Basics of HTML & CSS</TD>
        <TD><center>6</TD>
        <TD><center>0</TD>
        <TD><center>2</TD>
        <TD><center>6</TD>
        <TD><center>8</TD>
      </TR>
      <TR>
        <TD> <center>III </TD>
        <TD>Active Server Pages 3.0</TD>
        <TD><center>6</TD>
        <TD><center>4</TD>
        <TD><center>8</TD>
        <TD><center>0</TD>
        <TD><center>12</TD>
      </TR>
      <TR>
        <TD> <center>IV </TD>
        <TD>Server Side Coding with VBScript and XML</TD>
        <TD><center>8</TD>
        <TD><center>2</TD>
        <TD><center>4</TD>
        <TD><center>8</TD>
        <TD><center>14</TD>
      </TR>
      <TR>
        <TD> <center>V </TD>
        <TD>ASP Objects & Components</TD>
        <TD><center>10</TD>
        <TD><center>4</TD>
        <TD><center>4</TD>
        <TD><center>6</TD>
        <TD><center>14</TD>
      </TR>
      <TR>
        <TD> <center>VI </TD>
        <TD>Accessing database with ASP & ADO</TD>
        <TD><center>10</TD>
        <TD><center>4</TD>
        <TD><center>4</TD>
        <TD><center>6</TD>
        <TD><center>14</TD>
      </tr>
      <TR>
        <TD> </TD>
        <TD><center><b>Total</TD>
        <TD><center><b>42</TD>
        <TD><center><b>18</TD>
        <TD><center><b>26</TD>
        <TD><center><b>26</TD>
        <TD><center><b>70</TD>
      </tr>
  </TABLE>
  </body>
</html>`,
            description: ` Table tag is used to create tables `
          }
        ]
      },
      {
        lesson: i++,
        title: `Create a static web page which defines all text formatting tags of HTML in tabular format`,
        contents: [
          {
            code: `
<!DOCTYPE html>
<html>
  <body>
  <center>
    <table border=1>
      <caption align="top"><font size="4" color="red">Text
      Formatting Tags</font> </caption>
      <tr>
          <th>HTML Tag</th>
          <th>Output</th>
      </tr>
      <tr>
        <td>normal text</td>
        <td>hello world</td>
      </tr>
      <tr>
        <td>Font & its attributes</td>
        <td><FONT SIZE="+2" COLOR="#RRGGBB"> hello world
        </FONT></td>
      </tr>
      <tr>
        <td>&lt;B&gt;</td>
        <td><B> Bold </B></td>
      </tr>
      <tr>
        <td>&lt;I&gt;</td>
        <td><I> Italic </I></td>
      </tr>
      <tr>
        <td>&lt;U&gt;</td>
        <td><U> Underline </U></td>
      </tr>
      <tr>
        <td>&lt;EM&gt;</td>
        <td><EM> Emphasis </EM></td>
      </tr>
      <tr>
        <td>&lt;STRONG&gt;</td>
        <td><STRONG> STRONG </STRONG></td>
      </tr>
      <tr>
        <td>&lt;TELETYPE&gt;</td>
        <td><TT> TELETYPE </TT></td>
      </tr>
      <tr>
        <td>&lt;CITE&gt;</td>
        <td><CITE> Citation </CITE></td>
      </tr>
      <tr>
        <td>&lt;STRIKE&gt;</td>
        <td><STRIKE> strike-through text </STRIKE></td>
      </tr>
      <tr>
        <td>&lt;BIG&gt;</td>
        <td><BIG> text in a big font </BIG></td>
      </tr>
      <tr>
        <td>&lt;SMALL&gt;</td>
        <td><SMALL> text in a small font <SMALL></td>
      </tr>
      <tr>
        <td>&lt;SUB&gt;</td>
        <td>a<SUB> b </SUB></td>
      </tr>
      <tr>
        <td>&lt;SUP&gt;</td>
        <td>a<SUP> b</SUP></td>
      </tr>
    </table>
  </body>
</html>`,
            description: ` Table tag is used to create tables `
          }
        ]
      },
      {
        lesson: i++,
        title: "Create webpage to include image using HTML tag",
        contents: [
          {
            code: `
<!DOCTYPE html>
<html>
<body background="https://raw.githubusercontent.com/Mariii123/bootstrap-4-projects/design1/header-bg.jpg">
  <center><img src="https://raw.githubusercontent.com/Mariii123/bootstrap-4-projects/design1/01-thumbnail.jpg" width="200" height="200"/>
</body>
</html>`,
            description: `<img> tag is used to insert images in web page `
          }
        ]
      },
      {
        lesson: i++,
        title: "Create employee registration webpage using HTML form objects",
        contents: [
          {
            code: `
<!DOCTYPE html>
<html>
  <head><title>Employee Registration form</title></head>
  <body>
    <center>
      <font size="13" color="red">Employee Registration Form</font>
      <form>
        <table>
          <tr>
            <td></td>
            <td>
              <input type="radio" name="initial" checked />Mr.
              <input type="radio" name="initial" />Mrs.
              <input type="radio" name="initial" />Ms.
            </td>
          </tr>
          <tr>
            <td>First Name</td>
            <td><input type="text" name="fn" placeholder="First Name" /></td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td><input type="text" name="ln" placeholder="Last Name" /></td>
          </tr>
          <tr>
            <td>City</td>
            <td><input type="text" name="ct" /></td>
          </tr>
          <tr>
            <td>State</td>
            <td>
              <select name="state">
                <option value="Gujarat">Gujarat </option
                ><option value="Maharastra">Maharastra </option
                ><option value="Karnataka">Karnataka </option
                ><option value="Delhi">Delhi </option></select
              >
            </td>
          </tr>
          <tr>
            <td>Zip</td>
            <td><input type="text" name="zp" /></td>
          </tr>
          <tr>
            <td>Upload Photo</td>
            <td><input type="file" name="photo" /></td>
          </tr>
          <tr>
            <td>E-Mail</td>
            <td><input type="text" name="email" size="30" /></td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td><input type="text" name="mob" placeholder="+91" /></td>
          </tr>
          <tr>
            <td>Languages known</td>
            <td>
              <input
                type="checkbox"
                name="lk"
                value="Gujarati"
                checked
              />Gujarati
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" name="lk" value="Hindi" checked />Hindi
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" name="lk" value="English" checked />English
            </td>
          </tr>
          <tr>
            <td></td>
            <td><input type="checkbox" name="lk" value="Marathi" />Marathi</td>
          </tr>
          <tr>
            <td>Additional Information</td>
            <td>
              <textarea
                name="add"
                rows="3"
                cols="20"
                placeholder="Optional"
                wrap
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" value="submit" />&nbsp;<input
                type="reset"
                value="reset"
              />
            </td>
          </tr>
        </table>
      </form>
    </center>
  </body>
</html>`
          }
        ]
      }
    ]
  },
  {
    id: 2,
    noOfLearners: 0,
    title: "CSS",
    description:
      "CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes. ",
    courseContent: [
      {
        title: "CSS Syntax",
        lesson: i1++,
        contents: [
          {
            contentDesc:
              "In this example all <p> elements will be center-aligned, with a red text color:",
            code: `
<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: red;
        text-align: center;
      } 
    </style>
  </head>
  <body>
    <p>Hello World!</p>
    <p>These paragraphs are styled with CSS.</p>
  </body>
</html>`,
            title: "Syntax",
            description: `A CSS rule-set consists of a selector and a declaration block:
        
CSS selector
        
The selector points to the HTML element you want to style.
        
The declaration block contains one or more declarations separated by semicolons.
        
Each declaration includes a CSS property name and a value, separated by a colon.
        
A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces. `
          },
          {
            contentDesc:
              "A CSS comment starts with /* and ends with */. Comments can also span multiple lines:",
            code: `
<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        color: red;
        /* This is a single-line comment */
        text-align: center;
      }
      
      /* This is
      a multi-line
      comment */
    </style>
  </head>
  <body>
    <p>Hello World!</p>
    <p>These paragraphs are styled with CSS.</p>
  </body>
</html>`,
            title: "CSS Comments",
            description: `Comments are used to explain the code, and may help when you edit the source code at a later date.

Comments are ignored by browsers.`
          }
        ]
      },
      {
        title: "Use CSS for full screen background image",
        lesson: i1++,
        contents: [
          {
            description: `We will use background-image property to have  background image for an element.

By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.`,
            contentDesc: `Here, we use background-size property which has value 100vw 100vh to make the background image occupy the full screen
            
And background-repeat: no-repeat makes the background image non repeatable `,
            code: `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body{
        background-image:url("https://raw.githubusercontent.com/Mariii123/bootstrap-4-projects/design1/header-bg.jpg");
        background-size:100vw 100vh;
      }
    </style>
  </head>
  <body>
  </body>
</html>`
          }
        ]
      },
      {
        title: "Create a image using box shadow",
        lesson: i1++,
        contents: [
          {
            contentDesc: `In this tutorial we are going to create a mario image using box shadow`,
            code: `
<!DOCTYPE html>
<html>
<head>
    <title>Mario</title>
</head>
<body>
    <div class="mario-block">
        <div class="mario"></div>
    </div>
</body>
</html>`
          },
          {
            contentDesc: `Specify the width and height of image,remember 1em = 16px, every block of image is 16px i.e 1em, centering the image using position absolute
            
Now, actual image div we specify the width and height of block as 1em box-shadow has grid like structure which has a width and height of parent element, here parent element has 16 x 17 em so itt forms a 16x17 grid if width of image block is 1em

Inside box shadow, we specify value as x-offset y-offset and color`,
            code: `<!DOCTYPE html>
<html>
<head>
    <title>Mario</title>
    <style>
      .mario-block{
        width: 16em;
        height: 17em;
        position: absolute;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
    
    }
    .mario{
        display: block;
        width: 1em;
        height: 1em;
        background-color: #e7eef1;
        box-shadow: 
        0em 0em #e7eef1,
        1em 0em #e7eef1,
        2em 0em #e7eef1,
        3em 0em #e7eef1,
        4em 0em #e7eef1,
        5em 0em #e7eef1,
        6em 0em #e7eef1,
        7em 0em #e7eef1,
        8em 0em #e7eef1,
        9em 0em #e7eef1,
        10em 0em #e7eef1,
        11em 0em #e7eef1,
        12em 0em #e7eef1,
        13em 0em #e7eef1,
        14em 0em #e7eef1,
        15em 0em #e7eef1,

        0em 1em #e7eef1,
        1em 1em #e7eef1,
        2em 1em #e7eef1,
        3em 1em #e7eef1,
        4em 1em #f00,
        5em 1em #f00,
        6em 1em #f00,
        7em 1em #f00,
        8em 1em #f00,
        9em 1em #e7eef1,
        10em 1em #e7eef1,
        11em 1em #e7eef1,
        12em 1em #e7eef1,
        13em 1em #e7eef1,
        14em 1em #e7eef1,
        15em 1em #e7eef1,
        0em 2em #e7eef1,
        1em 2em #e7eef1,
        2em 2em #e7eef1,
        3em 2em #f00,
        4em 2em #f00,
        5em 2em #f00,
        6em 2em #f00,
        7em 2em #f00,
        8em 2em #f00,
        9em 2em #f00,
        10em 2em #f00,
        11em 2em #f00,
        12em 2em #e7eef1,
        13em 2em #e7eef1,
        14em 2em #e7eef1,
        15em 2em #e7eef1,

        0em 3em #e7eef1,
        1em 3em #e7eef1,
        2em 3em #e7eef1,
        3em 3em brown,
        4em 3em brown,
        5em 3em brown,
        6em 3em #ffad60,
        7em 3em #ffad60,
        8em 3em #000,
        9em 3em #ffad60,
        10em 3em #e7eef1,
        11em 3em #e7eef1,
        12em 3em #e7eef1,
        13em 3em #e7eef1,
        14em 3em #e7eef1,
        15em 3em #e7eef1,

        0em 4em #e7eef1,
        1em 4em #e7eef1,
        2em 4em brown,
        3em 4em #ffad60,
        4em 4em brown,
        5em 4em #ffad60,
        6em 4em #ffad60,
        7em 4em #ffad60,
        8em 4em #000,
        9em 4em #ffad60,
        10em 4em #ffad60,
        11em 4em #ffad60,
        12em 4em #e7eef1,
        13em 4em #e7eef1,
        14em 4em #e7eef1,
        15em 4em #e7eef1,

        0em 5em #e7eef1,
        1em 5em #e7eef1,
        2em 5em brown,
        3em 5em #ffad60,
        4em 5em brown,
        5em 5em brown,
        6em 5em #ffad60,
        7em 5em #ffad60,
        8em 5em #ffad60,
        9em 5em #000,
        10em 5em #ffad60,
        11em 5em #ffad60,
        12em 5em #ffad60,
        13em 5em #e7eef1,
        14em 5em #e7eef1,
        15em 5em #e7eef1,

        0em 6em #e7eef1,
        1em 6em #e7eef1,
        2em 6em #e7eef1,
        3em 6em brown,
        4em 6em #ffad60,
        5em 6em #ffad60,
        6em 6em #ffad60,
        7em 6em #ffad60,
        8em 6em #000,
        9em 6em #000,
        10em 6em #000,
        11em 6em #000,
        12em 6em #e7eef1,
        13em 6em #e7eef1,
        14em 6em #e7eef1,
        15em 6em #e7eef1,

        0em 7em #e7eef1,
        1em 7em #e7eef1,
        2em 7em #e7eef1,
        3em 7em #e7eef1,
        4em 7em #ffad60,
        5em 7em #ffad60,
        6em 7em #ffad60,
        7em 7em #ffad60,
        8em 7em #ffad60,
        9em 7em #ffad60,
        10em 7em #e7eef1,
        11em 7em #e7eef1,
        12em 7em #e7eef1,
        13em 7em #e7eef1,
        14em 7em #e7eef1,
        15em 7em #e7eef1,

        0em 8em #e7eef1,
        1em 8em #e7eef1,
        2em 8em #e7eef1,
        3em 8em red,
        4em 8em red,
        5em 8em blue,
        6em 8em red,
        7em 8em red,
        8em 8em blue,
        9em 8em red,
        10em 8em red,
        11em 8em #e7eef1,
        12em 8em #e7eef1,
        13em 8em #e7eef1,
        14em 8em #e7eef1,
        15em 8em #e7eef1,

        0em 9em #e7eef1,
        1em 9em #e7eef1,
        2em 9em red,
        3em 9em red,
        4em 9em red,
        5em 9em blue,
        6em 9em red,
        7em 9em red,
        8em 9em blue,
        9em 9em red,
        10em 9em red,
        11em 9em red,
        12em 9em #e7eef1,
        13em 9em #e7eef1,
        14em 9em #e7eef1,
        15em 9em #e7eef1,

        0em 10em #e7eef1,
        1em 10em red,
        2em 10em red,
        3em 10em red,
        4em 10em red,
        5em 10em blue,
        6em 10em blue,
        7em 10em blue,
        8em 10em blue,
        9em 10em red,
        10em 10em red,
        11em 10em red,
        12em 10em red,
        13em 10em #e7eef1,
        14em 10em #e7eef1,
        15em 10em #e7eef1,

        0em 11em #e7eef1,
        1em 11em #ffad60,
        2em 11em #ffad60,
        3em 11em red,
        4em 11em blue,
        5em 11em yellow,
        6em 11em blue,
        7em 11em blue,
        8em 11em yellow,
        9em 11em blue,
        10em 11em red,
        11em 11em #ffad60,
        12em 11em #ffad60,
        13em 11em #e7eef1,
        14em 11em #e7eef1,
        15em 11em #e7eef1,

        0em 12em #e7eef1,
        1em 12em #ffad60,
        2em 12em #ffad60,
        3em 12em #ffad60,
        4em 12em blue,
        5em 12em blue,
        6em 12em blue,
        7em 12em blue,
        8em 12em blue,
        9em 12em blue,
        10em 12em #ffad60,
        11em 12em #ffad60,
        12em 12em #ffad60,
        13em 12em #e7eef1,
        14em 12em #e7eef1,
        15em 12em #e7eef1,

        0em 13em #e7eef1,
        1em 13em #ffad60,
        2em 13em #ffad60,
        3em 13em blue,
        4em 13em blue,
        5em 13em blue,
        6em 13em blue,
        7em 13em blue,
        8em 13em blue,
        9em 13em blue,
        10em 13em blue,
        11em 13em #ffad60,
        12em 13em #ffad60,
        13em 13em #e7eef1,
        14em 13em #e7eef1,
        15em 13em #e7eef1,

        0em 14em #e7eef1,
        1em 14em #e7eef1,
        2em 14em #e7eef1,
        3em 14em blue,
        4em 14em blue,
        5em 14em blue,
        6em 14em #e7eef1,
        7em 14em #e7eef1,
        8em 14em blue,
        9em 14em blue,
        10em 14em blue,
        11em 14em #e7eef1,
        12em 14em #e7eef1,
        13em 14em #e7eef1,
        14em 14em #e7eef1,
        15em 14em #e7eef1,

        0em 15em #e7eef1,
        1em 15em #e7eef1,
        2em 15em brown,
        3em 15em brown,
        4em 15em brown,
        5em 15em #e7eef1,
        6em 15em #e7eef1,
        7em 15em #e7eef1,
        8em 15em #e7eef1,
        9em 15em brown,
        10em 15em brown,
        11em 15em brown,
        12em 15em brown,
        13em 15em #e7eef1,
        14em 15em #e7eef1,
        15em 15em #e7eef1,

        0em 16em #e7eef1,
        1em 16em brown,
        2em 16em brown,
        3em 16em brown,
        4em 16em brown,
        5em 16em #e7eef1,
        6em 16em #e7eef1,
        7em 16em #e7eef1,
        8em 16em #e7eef1,
        9em 16em brown,
        10em 16em brown,
        11em 16em brown,
        12em 16em brown,
        13em 16em brown,
        14em 16em #e7eef1,
        15em 16em #e7eef1;
    }  
    </style>
</head>
<body>
    <div class="mario-block">
        <div class="mario"></div>
    </div>
</body>
</html>
`
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "JavaScript",
    description: `JavaScript is the programming language of HTML and the Web.

JavaScript is easy to learn.`,
    courseContent: [
      {
        lesson: i3++,
        title:
          "Create a simple multiplication table asking the user for the input",
        contents: [
          {
            contentDesc: `Here, we are having a script tag inside body.We will ask for user input for accepting a number.

var n = prompt("Enter a number") will create a popup which asks for user input and assigns the user input to variable n

Inside for loop
Statement 1 sets a variable before the loop starts (var i = 1).
Statement 2 defines the condition for the loop to run (i must be less than or equal to 10).
Statement 3 increases a value (i++) each time the code block in the loop has been executed

document.write() is used for displaying output

`,
            code: `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Multiplication table</title>
  </head>
  <body>
    <div class="main-container">
      <h2>Multiplication Table</h2>
    </div>
    <script type="text/javascript">
      var n = prompt("Enter the number");
      var m;
      for (var i = 1;i <= 10; i++){
        m = n * i;
        document.write("<p>" + n + " x " + i + " = " + m + "</p>")
      }
    </script>
  </body>
</html>

`
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Practice Projects",
    courseContent: [
      {
        lesson: i2++,
        title: "Tribute Page",
        contents: [
          {
            code: `
<!DOCTYPE html>
<html>
<head>
  <title>Tribute Page</title>
</head>
<body>
  <div class="main-container">
    <div class="text-container">
      <h4>Dr.APJ Abdul Kalam</h4>
      <p>The Missile man of India</p>
    </div>
    <div class="img-container">
    </div>
  </div>
</body>
</html>`,
            contentDesc: `Create a div element with class name as main container which has two sub div 's  name first div with class as text-container and second div with class name img-container

Place <h4> tag which has a text to whom you want to tribute and <p> tag to describe slogan about that person in the text-container`
          },
          {
            title: "Define styles",
            code: `
<!DOCTYPE html>
<html>
<head>
  <title>Tribute Page</title>
  <style>
      * {
        margin: 0;
        padding: 0;
      }
      .main-container {
        background-color: #fff;
        width: 100vw;
        height: 100vh;
      }
      .text-container {
        background-color: #e2e2e2;
        text-align: center;
        padding: 16px 0;
      }
      .img-container {
        margin: 16px auto;
        height: 70%;
        max-width: 90%;
        background-image: url("https://raw.githubusercontent.com/Mariii123/CSS/master/apjkalam.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    </style>
</head>
<body>
  <div class="main-container">
    <div class="text-container">
      <h4>Dr.APJ Abdul Kalam</h4>
      <p>The Missile man of India</p>
    </div>
    <div class="img-container">
    </div>
  </div>
</body>
</html>`,
            contentDesc: `So, Now comes the designing part, we will add a style tag inside head tag.
First style is for all which is given by * selector and specify padding and margin value to 0

main-container styles: Here, we are going to have the 100% width and height of screen so width and height property will have values 100vw and 100vh respectively.
Also, you can have your color for background so specify that color inside background color property

text-container styles: We have a background-color, text-align, padding property for it.Specify the background-color, alignment of text and padding in px

img-container styles: Specify the tribute image as a background-image, with additional property such width and height in percentages to make it more responsive.
background-size:contain property resize the background image to make sure the image is fully visible.
background-position:center's the background image.
Note: bacground-image will work only if the height of the container is specified 
margin:16px auto places the element to the center horizontally respective to the parent container and 16px margin on top and bottom of element.
            `
          }
        ]
      },
      {
        lesson: i2++,
        title: "Survey Form",
        contents: [
          {
            code: `
<!DOCTYPE html>
<html>
  <head>
    <title>Survey Form</title>
  </head>
  <body>
  <body>
  <div class="main-container">
    <h2>Survey Form</h2>
    <form class="form-container">
      <h4>Let us know how we can improve MLearn</h4>
      <label for="name">First Name</label>
      <input type="text" id="name" placeholder="Your name.." />
      <label for="email">Email Address</label>
      <input type="email" id="email" placeholder="Your Email Address.." />
      <label for="age">Age</label>
      <input type="number" id="age" placeholder="Your Age.." />
      <label for="country">Which role suits you the best?</label>
      <select id="country" name="country">
        <option value="Student">Student</option>
        <option value="Developer">Developer</option>
        <option value="Other">Other</option>
      </select>
      <p>How Likely would you recommend MLearn to your friend</p>
      <input type="radio" name="r1" id="r1" value="Definately" />Definately
      <input type="radio" name="r1" id="r2" value="Not Sure" />Not Sure
      <input type="radio" name="r1" id="r3" value="May be" />May be
      <input type="submit" value="Submit" />
    </form>
  </div>
</body>
</html>            
            `,
            contentDesc: `We are going to have a div with class name man-container which has has a div with class name as form-container which will contain form objects
We will have label and input tags inside the form tags
We will add all inputs required for the survey form`
          },
          {
            title: "Define styles",
            code: `
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Survey Form</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .main-container {
        background: lightblue;
        padding: 16px;
      }
      h2,
      h4 {
        text-align: center;
        margin: 8px 0px;
      }
      .form-container {
        background: #e2e2e2;
        text-align: left;
        padding: 16px;
      }
      input,
      select {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        
      }

      input[type="submit"] {
        width: 100%;
        background-color: lightblue;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
      }
      input[type="radio"] {
        width: fit-content;
        margin: 8px;
      }
    </style>
  </head>
  <body>
    <div class="main-container">
      <h2>Survey Form</h2>
      <form class="form-container">
        <h4>Let us know how we can improve MLearn</h4>
        <label for="name">First Name</label>
        <input type="text" id="name" placeholder="Your name.." />
        <label for="email">Email Address</label>
        <input type="email" id="email" placeholder="Your Email Address.." />
        <label for="age">Age</label>
        <input type="number" id="age" placeholder="Your Age.." />
        <label for="country">Which role suits you the best?</label>
        <select id="country" name="country">
          <option value="Student">Student</option>
          <option value="Developer">Developer</option>
          <option value="Other">Other</option>
        </select>
        <p>How Likely would you recommend MLearn to your friend</p>
        <input type="radio" name="r1" id="r1" value="Definately" />Definately
        <input type="radio" name="r1" id="r2" value="Not Sure" />Not Sure
        <input type="radio" name="r1" id="r3" value="May be" />May be
        <input type="submit" value="Submit" />
      </form>
    </div>
  </body>
</html>            
            `,
            contentDesc: `So, Now comes the designing part, we will add a style tag inside head tag.
First style is for all which is given by * selector and specify padding and margin value to 0
and box-sizing
main-container styles: It contains your color for background and padding in pixels

We have two headings in our main container h2 and h4, we specify the text-align and margin property.text-align:center makes the  text horizontally center in the screen, margin:8px 0px adds top and bottom margin as 8px and left an right margin as 0px

form-container styles: Similar to the main container apply styles to form-container.

input styles: Have a input selector and specify some padding, margin and widths, border 
text-container styles: We have a background-color, text-align, padding property for it.Specify the background-color, alignment of text and padding in px

img-container styles: Specify the tribute image as a background-image, with additional property such width and height in percentages to make it more responsive.
background-size:contain property resize the background image to make sure the image is fully visible.
background-position:center's the background image.
Note: bacground-image will work only if the height of the container is specified 
margin:16px auto places the element to the center horizontally respective to the parent container and 16px margin on top and bottom of element.
            `
          }
        ]
      }
    ]
  }
];
export default data;
