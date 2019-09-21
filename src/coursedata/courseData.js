var i = 1;
var i1 = 1;
var i2 = 1;
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
      }
    ]
  }
];
export default data;
