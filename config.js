const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_50_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDg4LFxuICAgICAgICA0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMixcbiAgICAgICAgNTksXG4gICAgICAgIDk5LFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIzLFxuICAgICAgICA2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMSxcbiAgICAgICAgODksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2LFxuICAgICAgICA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MixcbiAgICAgICAgMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDksXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDc1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2Z1A2NFMyQjA3ZDNWZjNEdzVwSDVUVWgvVFF0YkFid2dGRGRUZHd0bEtJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLdnFVQnc2eVQ2RzQ5TUNVcnpQdXp3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFkYmFhNWI5LTFkNDItNDM4Ni1iODM5LTcyZmQxYzcyNmFhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDIzMixcbiAgICAgIDE3NyxcbiAgICAgIDE5MSxcbiAgICAgIDEwMSxcbiAgICAgIDM2LFxuICAgICAgMTI2LFxuICAgICAgMjQ4LFxuICAgICAgMjgsXG4gICAgICAyMTUsXG4gICAgICAxMjYsXG4gICAgICA4MCxcbiAgICAgIDE4NyxcbiAgICAgIDc1LFxuICAgICAgMTE0LFxuICAgICAgODEsXG4gICAgICAyMTIsXG4gICAgICAyMTAsXG4gICAgICAxMTcsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMjIxLFxuICAgICAgMjQsXG4gICAgICAxODQsXG4gICAgICAyMDQsXG4gICAgICA5NCxcbiAgICAgIDE4NCxcbiAgICAgIDIwNSxcbiAgICAgIDU1LFxuICAgICAgMjQsXG4gICAgICAyMTAsXG4gICAgICAyMjQsXG4gICAgICAyMjgsXG4gICAgICAyMyxcbiAgICAgIDE5OCxcbiAgICAgIDE1NCxcbiAgICAgIDE3MSxcbiAgICAgIDE5OSxcbiAgICAgIDIyNSxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdLNkEyWFRUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcyNTkyNDc4NjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlguaGFzYVwiLFxuICAgIFwibGlkXCI6IFwiMjE1Mzc1OTMzMzYyMzQ0OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppUTllZ0ZFT1hINWJRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS0F2SVhsZmRpSEdNeXpReVFWQW9PaEFGeWJhbGx0SlZrcGNybDhnUGx3az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxL1lHN29YL3BpRDNadytaTlVWMUEwMUdsN1E3WVAzVFNndVJxZTB3dCthNTBrdXNNYzRtRHZXQ0FUblB6eW0zTkh6eEtaTzNGdGtDVE1aQXppZnhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMNFVJdHZCbG13blJCSjJVOFYvcFp3b3o4YnBBVG1MNDNQTk5iMXVRazhyMFpOSDZ4bEhaN2F1SFJyUkdRQjZud2hUZ2d4cm9sYlhvdVN6YlBybmFBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyNTkyNDc4NjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTMyODYxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVRclwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVFyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMnh5VHFEUElyTm94UWhFMTRBcWwrZDdsWXp0a2dKSTJ5WDF6bEladUpIRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTYyMjAwMDg4LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEyMjUxMzY3OTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
