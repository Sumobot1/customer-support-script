//AT SOME POINT PUT IN BINARY SEARCH TO FIND WORDS FASTER LOL

var sBlankEmail = "Is there a Videostream issue I can help you with? \n";

var sInstallCast = "Videostream needs the Google Cast app to be able to talk properly with your Chromecast.  You can install the Google Cast extension here: https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd?hl=en \n \nIf that one doesn't work, you can give the Cast Beta a shot: https://chrome.google.com/webstore/detail/google-cast-beta/dliochdbjfkdbacpmhlcpmleaejidimm?hl=en \n \nMake sure you open those links in Chrome! \n"

var sChromecastNotInDropdown = "Super sorry about this!! This is unfortunately a cast extension but we're fighting with :(  Can you try:\n"
var sChromecastNotInDropdown2 = "- Typing chrome://restart into your address bar \n";
var sChromecastNotInDropdown3 = "- Unplug and plug back in your chromecast \n";
var sChromecastNotInDropdown4 = "- Make sure your router has Multicast and SSDP enabled \n";
var sChromecastNotInDropdown5 = "- Restart your router by unplugging it and plugging it back in \n";
var sChromecastNotInDropdown6 = "- If you're currently powering your Chromecast from the TV's USB port, try using the wall adaptor. Some TVs don't give the Chromecast enough power which can lead to issues. \n";
var sChromecastNotInDropdown7 = "If those don't help try uninstalling the cast extension and using the beta one here: https://chrome.google.com/webstore/detail/google-cast-beta/dliochdbjfkdbacpmhlcpmleaejidimm?hl=en  \n";
var sChromecastNotInDropdown8 = "Finally, some antiviruses stop apps likes ours (but not youtube or Netflix) from communicating properly (especially AVG antivirus!), try disabling any you run and rebooting your computer! \n";

var sVideostreamChromebook = "If you have a Chromebook that doesn't have an ARM processor, then Videostream is fixed and ready for you!! :D Try uninstalling Videostream (chrome://extensions and then press the trash can beside Videostream) and reinstalling from the Chrome Webstore (https://chrome.google.com/webstore/detail/videostream-for-google-ch/cnciopoikihiagdjbjpnocolokfelagl?hl=en) \nAlso make sure you also have the latest version of ChromeOS! \nWe're so excited to get this fix out to you after all these months waiting for Google! If you still have any issues, please email me and we can help you sort them out :) \n";

var sFeatureLongTerm = "Thanks for the suggestion!! We're definitely considering that long term but with a small team of 7 it may take a while before we get that feature into your hands. Apologies! \n";

var sDownloadCap = "Videostream streams your videos only over your local network. This means the speed we can play them at is limited not by your ISP, but by the capabilities of your computer and router!  Videostream uses no internet bandwidth but does require you to be connected to your router for the videos to play.  This means Videostream should have nearly no impact on your monthly usage, aside from a small amount every time the Chromecast is used (the Chromecast doesn't have any internal memory so every time you want to use it, it needs to pull the app you are using from the internet) :) Any videos you download to watch with Videostream though will count against your internet cap during download, but not when you stream them to your Chromecast.  \n";

var sNaClLinux = "Super sorry! The Native Client is what allows us to play videos that are not in a format supported by the Chromecast.  With it disabled, some of your videos may play, but not necessarily all of them.  Unfortunately some of the Chromium builds don't come bundled with Native Client. Try downloading the full Chrome version for Linux and it most likely has Native Client bundled so that Videostream can work :) \n";

var sPraise = "Aww thanks so much for the kind words!! :) Love receiving emails like these, definitely confirms why we're working so hard to make Videostream better every day!! \n";

var sWindowsPhone = "Super sorry but we're still waiting on Google for full Chromecast support for Windows Phone. We won't be developing a Windows Phone app until that is released and tested. Apologies :( \n";

var sWorking = "Awesome!! Super stoked that Videostream is working now! Please let me know if you have any other issues :) \n";

var sViddit = "Sorry! Reddit has been the suckiest for returning data to us lately. We may have time to poke around to see if they've cut api access or anything now they have 'official' apps, etc. Viddit is a fun, hacky, side project for us that we built because we wanted instant entertainment and we all just get it from reddit anyway and it's super annoying it's been fritzy. It's taking all of us full time to maintain Videostream right now (and if it breaks we don't eat) but we'll try to fix viddit if/when we can. Hope this clears things up! \n";

var sDeletedOnAndroidStillThere1 = "Super sorry! Sometimes the Android app can get confused and has some issues like the one you're describing. Can you please send me a screenshot of what it looks like on your phone?  \n \nAlso try the following steps: \n"
var sDeletedOnAndroidStillThere2 = "- Unpair all computers from your Android app \n";
var sDeletedOnAndroidStillThere3 = "- Uninstall app from Android \n";
var sDeletedOnAndroidStillThere4 = "- Uninstall desktop app \n";
var sDeletedOnAndroidStillThere5 = "- Reinstall desktop and mobile apps \n";
var sDeletedOnAndroidStillThere6 = "- Go through regular pairing process \n";
var sDeletedOnAndroidStillThere7 = "\nThe un-pairing step is often unintuitive and forgotten but can help reduce a lot of the issues that come up. We are working on some fixes to this process to prevent users from falling through the cracks. We really appreciate your patience. Please let me know if this helps! :) \n";
var arsDeletedOnAndroidStillThere = [sDeletedOnAndroidStillThere1, sDeletedOnAndroidStillThere2, sDeletedOnAndroidStillThere3, sDeletedOnAndroidStillThere4, sDeletedOnAndroidStillThere5, sDeletedOnAndroidStillThere6, sDeletedOnAndroidStillThere7];

var sAndroidComputer1 = "Super sorry that you're having issues connecting your remote to your Mac!!  \n Couple things you can try that may fix it: \n";
var sAndroidComputer2 = "- Do you have Adblock or a VPN installed on your phone? These tend to block the ports that Videostream uses to connect the remote app to your computer. \n";
/*MAC*/
var sAndroidComputer3 = "- Have you tried adding Chrome to your Mac firewall exceptions? Check out this handy support link: https://support.apple.com/en-ca/HT201642  In the Advanced Settings -> Allowing Specific Applications section, add Chrome so that Videostream network connections can work. \n";
/*PC*/
var sAndroidComputer4 = "- Have you tried our firewall repair tool? https://github.com/GetVideostream/VideostreamPortFix/releases/download/1.0.6/VideostreamNetworkRepair.exe \n The firewall utility (above) only fixes windows defender and firewalls that copy its preferences (about half of them) do you run any other firewall? If you do we need TCP ports 5556 and 5558 open! Also check to make sure any antivirus you run doesn't also package in a firewall, they're tricky like that ;) I can help if you let me know which antivirus and firewall you have installed :) \n"
    /*MAC*/
var sAndroidComputer5 = "- Do you have a VPN or additional firewall running on your Mac or wireless router? Sometimes these can interfere with Videostream being able to send video to your Chromecast or connecting to your mobile app. If you let me know which app you're running, I can help you fix it :) \n";
var sAndroidComputer6 = "- Do you live in an apartment building or near lots of other neighbours (and their routers)? Sometimes Wifi interference can be a big issue, try using this app (https://play.google.com/store/apps/details?id=com.farproc.wifi.analyzer&hl=en) to see if your network is running on the same channel as a lot of other local networks. If so, then changing to a less used channel may help a lot!";
var sAndroidComputer7 = "- Do you have a funky network setup with multiple routers, access points, or a separate modem and router? Make sure your computer and phone are connected to the same device, otherwise they won't be able to find each other. \n";
var sAndroidComputer8 = "- Make sure your wifi is set to 'private' or 'home'! \n";
var sAndroidComputer9 = "- Finally, try restarting your computer, router and Chromecast, as well as uninstalling and reinstalling the Videostream Desktop, Videostream Mobile, and Google Cast apps. Sometimes that's all you need to do to get it working! \n";
var arsAndroidComputer = [sAndroidComputer1, sAndroidComputer2, sAndroidComputer3, sAndroidComputer4, sAndroidComputer5, sAndroidComputer6, sAndroidComputer7, sAndroidComputer8, sAndroidComputer9];

var sAndroidCast = "Apologies! One of the best parts of Videostream is our performance optimizations that let nearly any video stream easily to your Chromecast. This transcoding capability is very performance intensive which means that at this point that for the foreseeable future we'll be leveraging the capabilities of PCs to allow for flawless streaming and won't bring that natively to mobile anytime soon.  \nThere are certain apps that are on the Play store that let you stream directly from your phone and we'd encourage you to check those out if that's what you're looking for :) \n";

var sDRMiTunes = "Super sorry! Any iTunes tv or movie content you purchase is encased in a thick layer of DRM (digital rights management). This means that even though the file looks like a regular m4v format to you, it will only play in iTunes which means that unfortunately we can't stream it to your Chromecast. \n"

var sDVD = "Super sorry! We don't officially support streaming DVDs because many have DRM (Digital Rights Management) that lock many programs out of being able to play it or directly access the underlying video file. Videostream works best with video files, maybe try finding a file version of the DVD you're trying to play! Please let me know if that helps :) \n"

var sHomeMovies = "Home videos are really tough for the chromecast to play. They are usually super uncompressed (lots of data per second) and we can't convert them fast enough into something manageable for the chromecast on most consumer-grade computers :(  \nApologies!!";
var sHomeMovies2 = "\nWhen this happens could you do me a huge favour so I can look more into your specific case? Hit help and then contact - this will download a log file to your computer that you can send to me that will help a TON!!!! \n";
var arsHomeMovies = [sHomeMovies, sHomeMovies2];

var sVideoNoAudio1 = "Super sorry you're having some issues with the audio not streaming!! Couple things so I can better help you:  \n";
var sVideoNoAudio2 = "- Next time the video file has an issue, could you do me a huge favour so we can fix it? Hit 'Help' then 'Click to email the Team' - that'll download a log file to your computer that you can send to me that'll help a TON!!!! Make sure you do it after you get the problem :) \n";
var sVideoNoAudio3 = "- Switch your audio setting in Videostream to 'Default (stereo)' if it's currently on PCM  \n";
var sVideoNoAudio4 = "- Double check that in chrome://plugins you have Native Client listed and enabled \n";
var sVideoNoAudio5 = "- Try uninstalling and Reinstalling Videostream, as well as rebooting your computer \n";
var sVideoNoAudio6 = "- Do you mind trying to play the video in VLC?  Sometimes the file itself is corrupt unfortunately :/  \n";
var arsVideoNoAudio = [sVideoNoAudio1, sVideoNoAudio2, sVideoNoAudio3, sVideoNoAudio4, sVideoNoAudio5, sVideoNoAudio6];

var sBuffering1 = "Super sorry you are having buffering issues!  The buffering may have to do with the file format you're trying to play (if other files work great this is almost definitely the case!). Because we play local videos unlike Netflix/Youtube/Etc. we actually need to convert the videos in real-time into a format the chromecast can read! If you have videos in a format that is tougher to convert you sometimes get buffering if your router or computer cannot handle the conversion fast enough :( There are a few things to try though! \n \nBasic Fixes...  \n";
var sBuffering2 = "Router:  \n";
var sBuffering3 = "- Make sure the router is close to your Chromecast and computer  \n";
var sBuffering4 = "- Plug your computer into your router with an ethernet cable  \n";
var sBuffering5 = "- Reboot your router and Chromecast by unplugging them and plugging them back in  \n";
var sBuffering6 = "- Make sure your router has Multicast and SSDP enabled  \n";
var sBuffering7 = "- Move your laptop closer to the router. Sometimes depending where the laptop is, the signal could be weaker making it difficult to send video to the router  \n";
var sBuffering8 = "\n Network:  \n";
var sBuffering9 = "- Use the HDMI extender that came with your Chromecast (sometimes your TV throws of network interference that the extension can protect your Chromecast from)  \n";
var sBuffering10 = "- Make sure no one on your network is doing anything heavy (downloading, Netflix, Youtube...). If there is too much traffic on the network, it is difficult for enough data to get to the Chromecast.  \n";
var sBuffering11 = "\n Important Stuff:  \n";
var sBuffering12 = "- Do you live in an apartment building or near lots of other neighbours (and their routers)? Sometimes Wifi interference can be a big issue, try using this app (https://play.google.com/store/apps/details?id=com.farproc.wifi.analyzer&hl=en) to see if your network is running on the same channel as a lot of other local networks. If so, then changing to a less used channel may help a lot!  \n";
var sBuffering13 = "- Even in mp4 format, we sometimes need to still convert the file to be able to play it on the Chromecast.  Try using these links to configure the file in handbrake so it does not have to be converted at all:  \nGrab it here: https://handbrake.fr/  \nAnd then you can import these settings we made!  \nFor newest Handbrake v0.10.1 and newer:  https://www.dropbox.com/s/qmub8r8pvmxxp3e/Videostream%20Handbrake%20Profile%20Newest.plist?dl=0  \nFor older Handbrake v0.9.8-0.10.0:  https://www.dropbox.com/s/xm8j9y8ll90r0wx/Videostream%20Handbrake%20Profile%20New.plist?dl=0  \nFor ancient Handbrake: https://www.dropbox.com/s/ihqxm3ddsl4f11u/Videostream%20Handbrake%20Profile.plist?dl=0  \nThese options are (to double check):  \nContainer: mp4  \nVideo Codec: H264  \nH264 Profile: High  \nH264 Level: 4.2  \nAudio codec: AAC  \n";
var sBuffering14 = "-Try using the video compression option (it's in beta so I can't guaruntee how well it will work)!  You can access it by going to Settings -> Buffering Fixes (beta)  \n";
var sBuffering15 = "-Check your computer's power settings.  Make sure it is in the highest performance mode, and that there is no sleep timer active :)  \n";
var sBuffering16 = "\n Logs & Hardware:  \n";
var sBuffering17 = "- Next time it buffers, can you please send us logs? Hit 'Help' then 'Click to email the Team' - that'll download a log file to your computer that you can send to me that'll help a TON!!!! Make sure you do it after you get the problem :)  \n";
var sBuffering18 = "- What model is your computer and router?  \n";
var sBuffering19 = "In the end, you may just need to lower the quality of the video you are playing. This will make the streaming easier on your computer and your network.  \n";
var sBuffering20 = "My sincere apologies for this long list of todo's. Buffering is our toughest problem to fix so please let me know how this goes and I'll have a better idea how to help you!  \n";
var arsBuffering = [sBuffering1, sBuffering2, sBuffering3, sBuffering4, sBuffering5, sBuffering6, sBuffering7, sBuffering8, sBuffering9, sBuffering10, sBuffering11, sBuffering12, sBuffering13, sBuffering14, sBuffering15, sBuffering16, sBuffering17, sBuffering18, sBuffering19, sBuffering20];


var sPremiumNotWorking = "Videostream Premium is linked to the account you were signed into your chrome browser with when you made the purchase. This means that any computer where you are logged into premium with your browser will be able to use Videostream Premium. To activate premium you need to:  \n1. Click on the Chrome menu in the upper right of your browser window.  \n2. Click on Settings  \n3. Click on the button to Sign into Chrome  \n4. Sign in to Chrome with the same account you were logged into Chrome with when you purchased Premium!  \nIf this doesn't work I have a few suggestions: Go into the buy premium menu and click already have premium. If that doesn't work, log out of Chrome and back in! Finally, If that doesn't work, try restarting your computer/uninstalling/reinstalling the app.  \nWhen premium is activated, the Videostream logo in the top left corner of the app should be replaced with Videostream Premium!  \n \nHope that helps!  If not, do you mind sending me a screenshot of the confirmation email you got from Paypal, as well as the email you signed up for premium with?  That will help us check on our end :)";

var sCancelPremium = "To cancel our Premium account, go to the 'help' button in our app.  There should be a button there called subscription management.  You can click on it, and click a button to cancel your premium account. \n \nIf that doesn't work, you can also go to Paypal and cancel the recurring payment to us through Activity -> Select one of the payments -> Click 'See details on the classic site' -> View details of recurring payment! If you have Stripe, do you mind forwarding us the last email receipt you got? We can probably cancel on our end! \n";

var sChangeEmail = "Thanks so much for supporting us through Videostream Premium!  We will change your Premium account email ";
var sChangeEmail2 = "  Do you mind sending me an email just confirming that is what you want?  \n";

var sHeadphoneAudio = "Unfortunately we don't have this feature yet, but we'd like to have it :)  We've been getting a lot of requests for audio streaming directly to a phone or PC or Chromecast Audio with the video only going to the Chromecast.  As a small team we can't guarantee anything as far as how soon we can bring this feature to Videosteam but we will definitely work on it :) \n";

var sRefund = "We have absolutely no problem with refunding you.  If you have Paypal, go onto your Paypal account and dispute the transaction. If you have Stripe, do you mind forwarding us the last email receipt you got?  We will grant a refund asap!  \n";

//var sToLifetimeSale = "Thank you so much for supporting (and feeding) us through Videostream Premium!  We really appreciate it :D  To change to a lifetime subscription, go to the help button in Videostream.  There will be a subscription options button there.  Click on that to cancel your current subscription.  When you have done that, follow this link: https://www.paypal.me/videostream/24.99USD  \n";
var sToLifetimeNoSale = "Thank you so much for supporting (and feeding) us through Videostream Premium!  We really appreciate it :D  To change to a lifetime subscription, go to the help button in Videostream.  There will be a subscription options button there.  Click on that to cancel your current subscription.  When you have done that, follow this link: https://www.paypal.me/videostream/34.99USD  \n";

var sGetPremium = "Thanks so much for your interest in supporting (and feeding) us through Videostream Premium!  We really appreciate it :)  To subscribe to Videostream Premium, click the 'Go Premium' button in the app!  There you'll find options to get Monthly, Annual, and Lifetime subscriptions to Videostream Premium :)  \n";

var sPremiumFeatures = "Super stoked to hear you're interested in Videostream Premium!  Premium allows you to use the app to make playlists, change subtitle size and colour, and get notifications on Android when file finishes downloading, and grabs subtitles for you from opensubtitles.org!  To subscribe to Videostream Premium, click the 'Go Premium' button in the app.  You can pay through Paypal or Stripe (for credit cards).  More details can be found there :) \n \n Happy Streaming!";

var sFirewall = "Super sorry that you're having issues with your firewall!  \nHere's some things that should help:  \n";
var sFirewall2 = ""; //"Do you live in an apartment building or near lots of other neighbours (and their routers)? Sometimes Wifi interference can be a big issue, try using this app (https://play.google.com/store/apps/details?id=com.farproc.wifi.analyzer&hl=en) to see if your network is running on the same channel as a lot of other local networks. If so, then changing to a less used channel may help a lot!  \n";
var sFirewallWindows = "For Windows \n";
var sFirewallWindows2 = "-Have you tried our new repair tool? https://github.com/GetVideostream/VideostreamPortFix/releases/download/1.0.6/VideostreamNetworkRepair.exe  \n";
var sFirewallWindows3 = "-What other firewall/antivirus do you run besides windows defender? We need inbound TCP ports 5556 and 5558 open, some instructions are here: http://community.getvideostream.com/topic/6/developer-post-videostream-freezes-the-tab-antivirus-firewall-help  \n";
var sFirewallWindows4 = "-Also make sure your wifi is set to private or 'home' and not public!  \n";
var sFirewallWindows5 = "-Do you live in an apartment building or near lots of other neighbours (and their routers)? Sometimes Wifi interference can be a big issue, try using this app (https://play.google.com/store/apps/details?id=com.farproc.wifi.analyzer&hl=en) to see if your network is running on the same channel as a lot of other local networks. If so, then changing to a less used channel may help a lot!  \n";
var sFirewallWindows6 = "-Finally, do you use Chrome on multiple user accounts or use two versions of Chrome? Videostream can only be running on one instance of Chrome per computer. If you have multiple accounts try making sure Chrome is fully quit or completely logging out when switching users. If you're using multiple versions of Chrome try uninstalling Videostream from the versions you don't regularly use so that Videostream is only installed and running on one version of Chrome.  \n";
var arsFirewallWindows = [sFirewallWindows, sFirewallWindows2, sFirewallWindows3, sFirewallWindows4, sFirewallWindows5, sFirewallWindows6]
var sFirewallMac = "For Mac \n";
var sFirewallMac2 = "-To solve firewall issues for Mac check out this handy support link: https://support.apple.com/en-ca/HT201642 \n";
var sFirewallMac3 = "-In the Advanced Settings -> Allowing Specific Applications section, add Chrome so that Videostream network connections can work.  \n";
var sFirewallMac4 = "-Do you live in an apartment building or near lots of other neighbours (and their routers)? Sometimes Wifi interference can be a big issue, try using this app (https://play.google.com/store/apps/details?id=com.farproc.wifi.analyzer&hl=en) to see if your network is running on the same channel as a lot of other local networks. If so, then changing to a less used channel may help a lot!  \n";
var sFirewallMac5 = "-Finally, do you use Chrome on multiple user accounts or use two versions of Chrome? Videostream can only be running on one instance of Chrome per computer. If you have multiple accounts try making sure Chrome is fully quit or completely logging out when switching users. If you're using multiple versions of Chrome try uninstalling Videostream from the versions you don't regularly use so that Videostream is only installed and running on one version of Chrome.  \n";
var arsFirewallMac = [sFirewallMac, sFirewallMac2, sFirewallMac3, sFirewallMac4, sFirewallMac5];

var sSelectMultipleVideos = "Super sorry for the inconvenience!  Videostream cannot play only certain files in a playlist.  We have repeat and shuffle functions that allow you to change the order the files play in, and you can use the next/previous video buttons to switch between videos, but to only play certain files, you will need to make a new playlist.  There is good news though!  You can have the same file in a bunch of playlists if you want :)";

var sSearchBackToTop = "Thanks for letting us know!  We are aware of the bug and working on a fix for it :)  Do you mind sending us what phone/version of Android you have?  For now I would probably suggest trying an uninstall/reinstall of the Videostream Desktop/Mobile apps.  Additionally, how big is your media library?  This tends to happen more often with large media libraries.";

var sWindowsApp = "One of the advantages of having the app run in the Chrome browser is that it uses Javascript and can be run on any platform (write once, run everywhere basically).  The problem with making standalone applications, is that each one would only be able to run on one OS.  Standalone applications would also make it difficult for us to leverage the Google Cast app, which we use for streaming the video to the Chromecast.  While it would definitely be cool to be able to release Videostream as a standalone application, our 6 person team can't really promise anything :/  Really sorry for the inconvenience! \n \nFor now, I would probably suggest something along the lines of having Chrome start up when the computer is booted, and having Videostream as the default loading page. \n";

var sWindowsRightClick = "Super sorry!  Because we are a chrome app, we unfortunately do not have permission to access the right click menu :(";

var sBitrateProblem = "Really sorry you are having trouble streaming video!  Interestingly enough, the biggest thing affecting the quality of the video is not actually the resolution, but instead the bitrate (how much information is being sent per second).  Because of this, even if a video says it is 1080p resolution it may actually only be carrying as much information as one in 360p resolution, meaning that it will still look grainy on your TV.  One thing you could do to test this is to try playing it on something like VLC.  If it still looks grainy there, then it's probably the video file that is the issue.  If the video is really clear on VLC and not on Videostream, it's likely a problem on our end.  In that case let me know and we can take a look :)";

var sIOSAndroid = "Super sorry about the iOS app :(  Unfortunately, with our small 7 person dev team we aren't able to move as fast as we'd want to implement some of the super cool features like library and playlist support that are already on Android. Right now when the iOS app is launched, you end up seeing a screen saying something like 'Trying to connect to Desktop'.  This is because we have not yet gotten the library sync working :(  We really appreciate your patience and we can't wait to get these features out to you and all iOS users as soon as we can :)  \n \nOn the bright side, if you have Premium you can still control playlists from your iPhone! First, set up your playlist on your desktop. When you want to skip to the next video from your iPhone, simply seek playback to the end of the current video and Videostream will move on to the next video in your playlist. \n \n";

var sSignInTabOpens = "Thanks for letting us know about this one!  Unfortunately there isn't really a way to stop this right now (I find it annoying too) but we'll definitely look into it.  For now, I would suggest using a throwaway email to log into Chrome with.  \n \nSorry it's not a great solution :/  We are definitely looking to fix this in the future!";

var sComputerSleepsStopsVideo = "Super sorry for the confusion!  Videostream transcodes the video as the file is being played on your PC.  Your phone only acts as a remote!  Because of this, if you turn your phone off, it won't affect either of your streams (that would be like turning off your TV remote.  Whatever is playing at the time will still keep playing).  Putting your computer to sleep while streaming with Videostream is like cutting the power to the TV station.  No data will be able to be transmitted to your Chromecast.  This means that the computer running Videostream has to be awake when the video is playing :)  One thing you can do to make sure your computer stays awake is to go into your power settings, and clicking “more power options”.  You can then click on “more power options” in your current plan, and change the “put computer to sleep” option to “never”.";

var sAddSubtitleFiles = "Good news!  Videostream should automatically load subtitles on your hard drive when it can :)  If the subtitle file and the video file have the same name (ex. ilikedarthvader.srt and ilikedarthvader.mp4) and are in the same folder, we should be able to automatically play the file.  If this doesn't work, selecting both the subtitle file and the video file when choosing what you want to play (ex. select ilikedarthvader.srt and ilikedarthvader.mp4 in the file explorer) open both should force the subtitle file to be played with the video file :)";

var sPlaylistSupport = "Playlist support is one of the features in Videostream Premium!  The playlists can include videos and music, and are linked to your premium account on whatever computer you are using Videostream on.  This means that if you change computers, the playlists will unfortunately have to be recreated :(  The playlists have a shuffle function, and a repeat function.  We transcode the videos on the fly, so there will be some buffering every time a video is being played but otherwise, you should not have too much trouble!  That being said, if things break on you, let me know and we can try to get things sorted out!";

var sUPNPDLNA = "We definitely could (and would like to), but we're a pretty small team so we can't move as quickly as we would like to when implementing new features.  A project like this would be pretty big, especially since we wouldn’t be able to use the Chromecast to stream videos.  Unfortunately this means that you probably won’t be seeing it anytime soon :(";

var sPhoneVideosOnSide = "Super sorry for the inconvenience!  Right now we unfortunately don't support videos in Portrait format properly and they end up playing on their side like you're describing :(  Adding a rotation feature is definitely something we would like to do long term but with a small team of 6 it may take a while before we get that feature into your hands. Apologies!";

var sChromecastTimeout = "Super sorry :(  You're out of luck unfortunately.  The timeout is based on how long the Google Cast app holds connection with the Chromecast before dropping it :/  That being said, if you have an Android phone, you can find the video in your phone's file browser (admittedly sometimes annoying to do) and play it from there!";

var sDisplayContentSuggestions = "Super glad to hear you're enjoying Videostream!  Because Videostream transcodes the video files into a format the Chromecast can read in real time, every time you start a new video, we need a bit of time to load it. What you're seeing is movie suggestions from our dev team that we display when the next video is loading (we like to watch movies too in our spare time).  If you want to get rid of them you can go into settings -> more and deselect 'Show content suggestions on TV' :)";

var sOpenSubtitlesAds = "Super sorry for the inconvenience!  We grab the subtitles directly from opensubtitles.org so while we are not putting in the ads ourselves, they may have been embedded directly in the subtitle file or something :(  Unfortunately this means that we might not be able to do anything about it!  Do you mind sending me a screenshot of what you're seeing?  We probably can't do much but It would be good to know what's going on.  Additionally, have you given a program like Adblock plus a try?  I can't guarantee it will work, but it might be worth a shot!";

var sHowToMakeAPlaylist = "If you have Videostream Premium, you can make a playlist by going to SETTINGS -> PLAYLIST and enabling playlist mode.  You should then be able to add playlists by clicking the 'Add New Playlist' button, and edit their names by clicking on them when they show up on the homescreen!  Make sure you are signed in to your Videostream Premium account when you try to make the playlists :)  If you don't have Premium, definitely come check it out!  Our monthly plan is only $1.49 and is an awesome way to give Premium a try if you're not sure!";

//var sSubtitlesNotLoading1 = "Super sorry you are having trouble with getting your subtitles to load properly!  There's a few issues we still need to get figured out with our subtitle encoder right now and we really appreciate your patience with us!  Do you mind checking a few things out for me please? \n \n";
var sSubtitlesNotLoading1 = "Super sorry you are having trouble with getting your subtitles to load properly! The opensubtitles API (what we use use to to get subtitles from there) broke a few days ago so we're still trying to iron out bugs in our workaround! Do you mind checking a few things out for me please? \n \n";
var sSubtitlesNotLoading2 = "1. Make sure in Settings -> Subtitles you have enabled the automatic display of subtitles. \n";
var sSubtitlesNotLoading3 = "2. Make sure the subtitle file plays in VLC (sometimes the subtitle file itself is just broken) \n";
var sSubtitlesNotLoading4 = "3. Try playing around with the encoding setting (Settings -> Subtitles). Sometimes the file's encoding is different from the one we have it set to unfortunately, which can cause unknown characters, or even the subtitle to not show up at all (really sorry about this! We're hoping to work on a fix asap)! \n";
var sSubtitlesNotLoading5 = "4. Try uninstalling and reinstalling Videostream, and possibly rebooting your computer.  Sometimes that's all that is needed to get things working! \n \n";
var sSubtitlesNotLoading6 = "If the subtitles play in VLC, and none of the fixes here are working, super dooper apologies and let me know! The trouble also might be with the file itself (in which case do you mind sending it to me?)  We'll get this sorted out :)";
var arsSubtitlesNotLoading = [sSubtitlesNotLoading1, sSubtitlesNotLoading2, sSubtitlesNotLoading3, sSubtitlesNotLoading4, sSubtitlesNotLoading5, sSubtitlesNotLoading6];

var sPlaylistNotShowing = "Super sorry to hear you're having trouble getting your playlists to show up with Videostream Premium!  Couple things to check: \n";
var sPlaylistNotShowing2 = "1. Videostream Premium is linked to the account you were signed into your chrome browser with when you made the purchase.  Make sure you're logged into that account when using Videostream!  When premium is activated, the Videostream logo in the top left corner of the app should be replaced with Videostream Premium :)  If you run into trouble with this let me know and I'd be happy to help you out! \n";
var sPlaylistNotShowing3 = "2. Go into Settings -> Playlist and make sure playlists are enabled!  You should then be able to click on the playlist you want displayed and it will show up on your Videostream home screen :) \n";
var sPlaylistNotShowing4 = "Let me know if that helps :D \n";
var arsPlaylistNotShowing = [sPlaylistNotShowing, sPlaylistNotShowing2, sPlaylistNotShowing3, sPlaylistNotShowing4];

var sNoCastFound = "Super sorry!! Can you try: \n \n";
var sNoCastFound2 = "1) Typing chrome://restart into your address bar \n";
var sNoCastFound3 = "2) Unplug and plug back in your chromecast \n";
var sNoCastFound4 = "3) Make sure your router has Multicast and SSDP enabled \n";
var sNoCastFound5 = "4) Restart your router by unplugging it and plugging it back in \n";
var sNoCastFound6 = "5) If you're currently powering your Chromecast from the TV's USB port, try using the wall adaptor. Some TVs don't give the Chromecast enough power which can lead to issues. \n";
var sNoCastFound7 = "6) If you have a funky network setup with wifi extenders, or multiple networks, make sure your Chromecast is on the same network as your computer! \n";
var sNoCastFound8 = "\nIf those don't help try uninstalling the cast extension and using the beta one here: https://chrome.google.com/webstore/detail/google-cast-beta/dliochdbjfkdbacpmhlcpmleaejidimm?hl=en \n";
var sNoCastFound9 = "\nAs well, if you open Videostream from the chrome apps launcher can you try using the app menu built into chrome itself?  You can get to it through chrome://apps, or clicking on the 'Apps' button in your bookmarks bar! \n";
var sNoCastFound10 = "\nFinally, some antiviruses stop apps likes ours (but not youtube or Netflix) from communicating properly (especially AVG antivirus!), try disabling any you run and rebooting your computer! \n";
var sNoCastFound11 = "\nIf none of that works super dooper apologies and email me back!!! This is a cast extension bug we're fighting with :( \n";
var arsNoCastFound = [sNoCastFound, sNoCastFound2, sNoCastFound3, sNoCastFound4, sNoCastFound5, sNoCastFound6, sNoCastFound7, sNoCastFound8, sNoCastFound9, sNoCastFound10, sNoCastFound11];

var sCastFromPhone = "Apologies! One of the best parts of Videostream is our performance optimizations that let nearly any video stream easily to your Chromecast. This transcoding capability is very performance intensive which means that at this point that for the foreseeable future we'll be leveraging the capabilities of PCs to allow for flawless streaming and won't bring that natively to mobile anytime soon.  \n\nThere are certain apps that are on the Play, and possibly the App Store that let you stream directly from your phone and we'd encourage you to check those out if that's what you're looking for :) \n\nCheers!";

var sM2TS = "The answer to that question is... sometimes.  .m2ts is an extension often used for Blu Ray disks, or TV boxes (like a Bell TV box).  This means that these files often have DRM on them, which means that while they look like regular files, they can often only play on certain media players.  If the file doesn't have DRM on it, Videostream should be able to play it without too much trouble!  That being said, if you are running into trouble and the file plays fine in something like VLC, let me know because it might be an issue with our encoding algorithms.  One thing that might help in this case is converting the video with Handbrake.  It converts files into a format that plays well with the Chromecast.  You can grab it here (for free): https://handbrake.fr/  \n\nAnd then you can import these settings we made! \nFor newest Handbrake v0.10.1 and newer:  https://www.dropbox.com/s/qmub8r8pvmxxp3e/Videostream%20Handbrake%20Profile%20Newest.plist?dl=0 \nFor older Handbrake v0.9.8-0.10.0:  https://www.dropbox.com/s/xm8j9y8ll90r0wx/Videostream%20Handbrake%20Profile%20New.plist?dl=0 \nFor ancient Handbrake: https://www.dropbox.com/s/ihqxm3ddsl4f11u/Videostream%20Handbrake%20Profile.plist?dl=0 \n\nThese options are (to double check): \nContainer: mp4 \nVideo Codec: H264 \nH264 Profile: High \nH264 Level: 4.2 \nAudio codec: AAC \n\nLet me know if this works :) ";

var sPhoneCantFindVideostream = "Super sorry that you're having issues connecting your remote to your computer!!  Couple things you can try that may fix it: \n\n";
var sPhoneCantFindVideostream2 = "-Do you have Adblock or a VPN installed on your phone? These tend to block the ports that Videostream uses to connect the remote app to your computer.\n";
var sPhoneCantFindVideostream3 = "-If you have Windows, have you tried our firewall repair tool? https://github.com/GetVideostream/VideostreamPortFix/releases/download/1.0.5/VideostreamNetworkRepair.exe \n";
var sPhoneCantFindVideostream4 = "-If you have a Mac, have you tried adding Chrome to your Mac firewall exceptions? Check out this handy support link: https://support.apple.com/en-ca/HT201642 \nIn the Advanced Settings -> Allowing Specific Applications section, add Chrome so that Videostream network connections can work. \n";
var sPhoneCantFindVideostream5 = "-If your computer runs Linux but not Ubuntu (ex. Linux Mint, ChromeOS, etc.) Try this command: \n \nsudo /sbin/iptables -A INPUT -p tcp --dport 5556 -j ACCEPT \nsudo /sbin/iptables -A INPUT -p tcp --dport 5558 -j ACCEPT \n \nOr if that doesn't work: \nsudo /sbin/iptables -I INPUT -p tcp --dport 5556 -j ACCEPT \nsudo /sbin/iptables -I INPUT -p tcp --dport 5558 -j ACCEPT \n\nAs well try forgetting your network then reconnecting! \n";
var sPhoneCantFindVideostream6 = "-If your computer runs Ubuntu, Try these commands: \n\nsudo ufw allow 5556 \nsudo ufw allow 5558 \n\nAs well try forgetting your network then reconnecting! \n";
var sPhoneCantFindVideostream7 = "-Do you run any other firewall? If you do we need TCP ports 5556 and 5558 open! Also check to make sure any antivirus you run doesn't also package in a firewall, they're tricky like that ;) I can help if you let me know which antivirus and firewall you have installed :) \n";
var sPhoneCantFindVideostream8 = "-Do you have a funky network setup with multiple routers, access points, or a separate modem and router? Make sure your computer and phone are connected to the same device, otherwise they won't be able to find each other. \n";
var sPhoneCantFindVideostream9 = "-Make sure your wifi is set to 'private' or 'home'! \n";
var sPhoneCantFindVideostream10 = "-Finally, try restarting your computer, router and Chromecast. Sometimes that's all you need to do to get it working! \n \n";
var sPhoneCantFindVideostream11 = "Apologies and hope we can get this working for you soon!";
var arsPhoneCantFindVideostream = [sPhoneCantFindVideostream, sPhoneCantFindVideostream2, sPhoneCantFindVideostream3, sPhoneCantFindVideostream4, sPhoneCantFindVideostream5, sPhoneCantFindVideostream6, sPhoneCantFindVideostream7, sPhoneCantFindVideostream8, sPhoneCantFindVideostream9, sPhoneCantFindVideostream10, sPhoneCantFindVideostream11];

var sAudioNormalization = "Audio normalization is definitely something we would like to do!  We just haven't gotten around to it yet unfortunately :/  With our small team it's unfortunately difficult sometimes to move as fast as we would like to on the development of features like this.  It's on our roadmap though :)  One thing that your might want to check out (I know it's not neccessarily what you're looking for) is the PCM audio option we have in split testing right now!  If you uninstall and reinstall a bunch of times (I know it's a pain, really sorry we don't have a better solution for this!) you should be able to get it!";

var sOpenSubtitlesBroken = "Super sorry about that!  There was a problem with the opensubtitles api (what we use to grab subtitles from their site) yesterday meaning that we couldn't grab subtitles from their site.  We were able to make a workaround this morning so they should load now :) \n";

var sUninstallInstructions = "To uninstall Videostream, go to chrome://extensions and scroll down to where Videostream is.  There should be a trash can icon beside it.  Clicking that will uninstall Videostream.  Let me know if you have any trouble!";

var sSubtitleSize = "You're in luck!  Changing the size of subtitles is a feature of Videostream Premium and can be accessed through Settings -> Subtitles.  We offer a monthly subscription for $1.49 per month if you want to check it out to decide if you like it :)  \n \nHope that helps!  Let me know if you have any more questions!"

var sRepeatVideos = "Super sorry!  Right now we don't really have a function specifically to repeat one video.  The best way to do this would probably be with the Playlist functions in Videostream Premium.  You could try putting the video into its own playlist and put the playlist itself on repeat.  \n \n  Let me know if that helps!";

var sSubtitlesCutOff1 = "Really sorry about that!  The Chromecast got a firmware update a few days ago and it broke a bunch of stuff with our subtitles :(  We just found out about this problem yesterday evening and we're working on a fix as fast as we can.  Do you mind trying doing some stuff to help us out? \n";
var sSubtitlesCutOff2 = "1. Do you mind sending us your firmware?  You can do this by clicking on the Google Cast icon, clicking options, clicking 'Manage Cast Devices', and clicking your Chromecast.  From there you should get sent to a screen that shows you the details of the Chromecast.  Do you mind taking a screenshot of that and sending it to us? \n";
var sSubtitlesCutOff3 = "2. Try doing a factory reset on your Chromecast.  Here's a link on how to do it: http://www.droid-life.com/2013/07/31/how-to-factory-reset-a-chromecast/ \n";
var sSubtitlesCutOff4 = "3. Do you mind sending us some of the subtitle files that are not working, as well as pictures of what you're seeing on the TV?  That would help us out a lot! \n";
var sSubtitlesCutOff5 = "4. Make sure the subtitle file plays in VLC (sometimes the subtitle file itself is just broken) \n";
var sSubtitlesCutOff6 = "5. Try playing around with the encoding setting (Settings -> Subtitles). Sometimes the file's encoding is different from the one we have it set to unfortunately, which can cause unknown characters, or even the subtitle to not show up at all (really sorry about this! We're hoping to work on a fix asap)! \n \n";
var sSubtitlesCutOff7 = "Super sorry for the inconvenience!  We're working as fast as we can to get this fixed and it would be awesome if you could help us out!";
var arsSubtitlesCutOff = [sSubtitlesCutOff1, sSubtitlesCutOff2, sSubtitlesCutOff3, sSubtitlesCutOff4, sSubtitlesCutOff5, sSubtitlesCutOff6, sSubtitlesCutOff7];

var sGooglePlayCredit = "Super sorry!  Right now we unfortunately don't support payments through Google Play Credit :/  We got our Premium options working before we decided that we wanted to make an Android app, so we didn't even think of Google Play Credit as a viable payment option at the time.  We definitely want to get this working in the future, but with a small team, I can't give you a timeline on when we can get everything working the way we want it to!  \n \nReally sorry for the inconvenience!";

var sPlaylistMobile = "Super sorry about this!  Playlist support is definitely something we'd like to bring to mobile in the future, but with a small team we can't move as fast as we would like to when developing new features.  We unfortunately have not been able to get it working yet :(  I don't know if this helps, but you can still control playlists on mobile!  If you start the playlist on your computer, you can move forward through it by seeking to the end of the current video.  The next video will play automatically! \n \nReally sorry for the inconvenience!";
var bCheck = true;
var sAns = "";
var arsKeyWords;
var bLog;
var arsKeyTot;
var arQuestions, arAnswers;
var bKeywordslistpresent;
var arsWords;
console.log("poo");
//chrome.runtime.sendMessage({ action: "open", url: details[k].children[0].getAttribute("href") }, function() { console.log("opened ticket: ", i); });

chrome.runtime.sendMessage({ action: "query", type: "getURL" }, function(type) {
    console.log("type: ", type);
    if (type === "ticketlist") {
        console.log("dlkjflakjdflakjfa;ldjdklg herp derp");
        var arTickets = document.getElementsByClassName("subject_style"); //document.getElementById("ticket-list").children[0].children[0].children;
        for (var i = 0; i < arTickets.length; i++) {
            if (!(arTickets[i].classList.contains("customer_responded") || arTickets[i].classList.contains("customer_responded_overdue"))) {
                console.log("Conversation Start: ", i);
                var item = arTickets[i].parentNode.parentNode.children;
                console.log(arTickets[i].parentNode.parentNode.children);
                for (var j = 0; j < item.length; j++) {
                    if (item[j].classList.contains("td-ticket-details")) {
                        console.log(item[j].children[0].children);
                        var details = item[j].children[0].children;
                        for (var k = 0; k < details.length; k++) {
                            if (details[k].classList.contains("ticket-description-tip")) {
                                console.log(details[k].children[0].getAttribute("href"));
                                chrome.runtime.sendMessage({ action: "openvs", url: details[k].children[0].getAttribute("href") }, function() { console.log("opened ticket: ", i); });

                            }
                        }
                    }
                }
                //chrome.runtime.sendMessage({url: }, function(){console.log("done");});
            }
        }

    } else if (type === "translate") {
        console.log("kdlafjlkafajl");
        chrome.runtime.sendMessage({ state: "ready" }, function() {});

    } else if (type === "info") {
        console.log("info page is loaded");
        chrome.runtime.sendMessage({ tab: "info", state: "loaded" }, function() { console.log("send message loaded") });
    } else if (type === "generatetypos") {
        console.log("type is generatetypos");
        var vWait = window.setInterval(function(){
                if (document.getElementsByTagName("textarea").length >0){
                        setTimeout(function(){chrome.runtime.sendMessage({ tab: "typos", state: "loaded" }, function() { console.log("typos loaded"); });}, 00);
                        clearInterval(vWait);
        }}, 200);
        
        
    } else if (type === "ticket") {
        console.log("TYPE IS A TICKET LOLOLOLOL");
        // setTimeout(function() {
        //     console.log("kladfkaf;aflkafdkljaflkda dank");
        

        chrome.runtime.sendMessage({ action: "query", data: "database" });

        /*=====================================================================  MAIN PROGRAM  =====================================================================*/
        var sRequestTitle = document.getElementsByClassName('subject')[0].innerText.toLowerCase();
        var sRequestBody = document.getElementById('ticket_original_request').innerText.toLowerCase();
        var listOfTools = document.getElementsByClassName("attach_content");
        console.log("listOfTools: ", listOfTools);
        bLog = false;
        for (var i = 0; i < listOfTools.length; i++) {
            var contentOfList = listOfTools[i].children;
            for (var j = 0; j < contentOfList.length; j++) {
                if (contentOfList[j].classList.contains("ellipsis")) {
                    console.log("found ellipsis class in attachment");
                    console.log("contentOfList[j].children[0]: ", contentOfList[j].children[0], " ", contentOfList[j].children[0].tagName);
                    for (var k = 0; k < contentOfList[j].children.length; k++) {
                        if (contentOfList[j].children[k].tagName === "A") {
                            if (contentOfList[j].children[k].getAttribute("data-original-title") === "Videostream-ATTACH-ME.txt") {
                                bLog = true;
                            }
                            console.log(contentOfList[j].children[k].getAttribute("href"));
                            //window.open(contentOfList[j].children[k].getAttribute("href"), "_blank");
                            //chrome.tabs.create({url: contentOfList[j].children[k].getAttribute("href")}, function(){});
                            //chrome.tabs.create({url: "http://www.stackoverflow.com"});
                            chrome.runtime.sendMessage({ action: "openvs", url: contentOfList[j].children[k].getAttribute("href") }, function() { console.log("done"); });
                            //chrome.extension.getBackgroundPage().sayHello();
                        }
                    }

                }
            }

            /*        if (listOfTools[i].hasAttribute("data-original-title")){
                            console.log("hasAttribute - data-original-title ", listOfTools[i]);
                            if (listOfTools[i].getAttribute("data-original-title") === "Videostream-ATTACH-ME.txt"){
                                    console.log(listOfTools[i].getAttribute("href"));
                                    //window.open(listOfTools[i].getAttribute("href"), "_blank");
                                    //window.focus();
                                    bLog = true;
                                    chrome.tabs.create({url: listOfTools[i].getAttribute("href")})
                            }
                            //console.log(listOfTools[i]);
                    }*/

            //console.log(attachmentList[i].getElementsByClassName("elipsis"));
            //        for (var j = 0;j<components.length;j++){
            //              console.log(components[j].children);
            //}

        }



        if (sRequestBody === "") {
            checkForKeyWords(sRequestTitle);
            if (!bCheck)
                printAnswer(sBlankEmail);
        }

        //chrome.runtime.sendMessage({ action: "open", url: "https://translate.google.com/" }, function() { console.log("LEARL: "); });
        console.log("blkadklfadklfajljkad ", bLog);
        /*chrome.runtime.sendMessage({ action: "translate", text: sRequestTitle, type: "title" }, function() {
            console.log("finished translating title: ");

        });*/
        chrome.runtime.sendMessage({ action: "donttranslate", text: sRequestTitle, type: "title" }, function() { console.log("finished not translating title"); });
        //chrome.runtime.sendMessage({ action: "translate", text: sRequestBody, type: "body" }, function() { console.log("finished translating body: "); });
        chrome.runtime.sendMessage({ action: "donttranslate", text: sRequestBody, type: "body" }, function() { console.log("finished not translating body"); });
        //}, 5000);
        /*        chrome.runtime.sendMessage({action: "search", url: "https://translate.google.com/"}, function(id, bFoundURLInTab){
                console.log("bFoundURLInTab: ", bFoundURLInTab);
                if (!bFoundURLInTab){
                        console.log("could not find");
                }else{
                        console.log("found");
                }
        });*/





        //alert("here");
        /*CHANGE ALL NEWLINES TO SPACES*/

        /*        if (!confirm("was this dank")) {
                    printAnswer("\n");
                }*/


        //console.log(sInstallCast);
        //console.log(sRequestBody);
        //console.log(sRequestTitle);
        //document.write('poop');

        //return;
        // }

        /*

        document.getElementsByClassName("submit_btn").onclick() = function(){alert("kdafjakljsadlf")}


        var lol = document.getElementById("TicketPseudoReply").children

        lol.FwdButton.click()















        */





    }
});
var bTitle = false;
var bBody = false;
chrome.runtime.onMessage.addListener(function(requesttrans, sendertrans, sendResponsetrans) {
    console.log("info: ", requesttrans, " ", sendertrans);
    if (requesttrans.job === "solve") {
        document.getElementById('source').innerText = requesttrans.string;
        document.getElementById("gt-submit").click();
        //while (document.getElementById("result_box").children[0] === undefined){}
        var myVar = window.setInterval(function() {
            if (document.getElementById("result_box").innerText != "") {
                console.log("done the translate");
                console.log(document.getElementById("result_box").innerText);
                chrome.runtime.sendMessage({ action: "translatecomplete", sender: requesttrans, text: document.getElementById("result_box").innerText }, function() {});
                clearInterval(myVar);


            } else {
                console.log("no t done the translate");
            }
        }, 500);
    } else if (requesttrans.job === "generatetypos") {
        console.log("requesttrans.job is generatetypos");
        //console.log("Typos from: ", requesttrans.keywords);
        var sKeyword = requesttrans.keyword;
        //console.log("Typos to be found: ", arTypostobefound);
        //var i = 0;
        if (document.getElementsByTagName("textarea").length === 1) {
                console.log("First load - textarea.length is 1");
            document.getElementsByName("skip_letter")[0].click();
            document.getElementsByName("double_letters")[0].click();
            document.getElementsByName("reverse_letters")[0].click();
            document.getElementsByName("skip_spaces")[0].click();
            document.getElementsByName("missed_key")[0].click();
            document.getElementsByName("inserted_key")[0].click();
        }
        if (document.getElementsByTagName("textarea")[0].value != sKeyword) {

                console.log("New text - not equal current keyword");
            document.getElementsByName("user_input")[0].value = sKeyword;
            var arInputs = document.getElementsByTagName("input");
            for (var i = 0; i < arInputs.length; i++) {
                if (arInputs[i].value === "generate typos") {
                    console.log("found da button to generate typos, ", i);
                    arInputs[i].click();
                    break;
                }
            }
        }else if (document.getElementsByTagName("textarea")[0].value === sKeyword){
                var sGeneratedTypos = document.getElementsByTagName("textarea")[1].value;
                console.log("sAns: ", sGeneratedTypos);
                chrome.runtime.sendMessage({tab: "typos", state: "finished", finishedstuff: sGeneratedTypos, original: sKeyword, index: requesttrans.index}, function(){console.log("Sent messsage: ", sGeneratedTypos, " back to bg page");});
                setTimeout(function(){window.location.reload()/*chrome.runtime.sendMessage({tab: "typos", state: "loaded"}, function(){console.log("Responded that ready for next one");})*/;}, 000);
        }


        /*        var vDank = window.setInterval(function(){
                        if (i>=arTypostobefound.length){
                                window.clearInterval(vDank);
                        }else{
                                document.getElementsByName("user_input")[0].value = arTypostobefound[i][0];
                                var arInputs = document.getElementsByTagName("input");
                                for (var i=0;i<arInputs.length;i++){
                                        if (arInputs[i].value === "generate typos"){
                                                console.log("found da button to generate typos, ", i);
                                                arInputs[i].click();
                                        }
                                }

                        }
                        
                }, 500);*/
    } else if (requesttrans.job === "displaystuff") {
        console.log(requesttrans.questions, " ", requesttrans.answers, " ", requesttrans.keywords);
    } else if (requesttrans.job === "inject") {
        sAns = requesttrans.text;
        printAnswer(sAns);
    } else if (requesttrans.job === "query") {
        //   console.log(arsKeyTot);
        //   console.log(document.getElementsByClassName("redactor_editor")[0].children[1].children[2].innerText);
        chrome.runtime.sendMessage({ action: "gotKeyWords", sender: requesttrans, text: arsKeyTot, text2: document.getElementsByClassName("redactor_editor")[0].children[1].children[2].innerText, origin: requesttrans.origin }, function() { console.log("done sending keywords back"); })
    } else if (requesttrans.job === "keywordsreturned") {
        var vDank = window.setInterval(function() {
            if (bKeywordslistpresent) {
                console.log(requesttrans.question, " ", requesttrans.answer);
                arQuestions = requesttrans.question.split("  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ");
                for (var i = 0; i < arQuestions.length; i++) {
                    if (arQuestions[i] === String(arQuestions[i])) {
                        if (arQuestions[i].indexOf(",") > -1) {
                            console.log(arQuestions[i]);
                            arQuestions[i] = arQuestions[i].split(",");
                            console.log(arQuestions[i]);
                        } else {
                            console.log("nope.avi");
                            arQuestions[i] = [arQuestions[i]];
                        }
                    }
                }
                arAnswers = requesttrans.answer.split("  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ");
                //   console.log("Questions: ", arQuestions, " Answers: ", arAnswers);
                console.log("Title: ", sRequestTitle, " Body: ", sRequestBody); //I'M HERE RIGHT NOW
                /*                for (var i = 0;i<sRequestBody.length;i++){
                                        for (var j = 0;j<sRequestBody[i].length;j++){
                                                if (sRequestBody[i][j])
                                        }
                                }*/
                checkForKeyWords(sRequestTitle);
                if (!bCheck) {
                    //console.log("there is poop all over");
                    console.log(sRequestBody);
                    checkForKeyWords(sRequestBody);
                    if (!bCheck) {
                        printAnswer("Super sorry!  I don't quite understand your question!  Do you mind giving me a bit more information?  If possible, screenshots would be appreciated :) \n \n Cheers!");
                    } else {
                        console.log("sAns: ", sAns);
                        printAnswer(sAns);
                    }
                } else {
                        console.log("sAns before printing- in keywordsreturned: ", sAns);
                    printAnswer(sAns);
                    //  console.log("printingdeanswer");
                    console.log(sAns);
                }
                window.clearInterval(vDank);
            }
        }, 500);

    } else if (requesttrans.job === "keywordslistreturned") {
        // console.log(requesttrans.info);
        arsWords = requesttrans.info;
        //   console.log("arsWords: ", arsWords, " String: ", String(arsWords));
        arsWords = arsWords.split("  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex    newarraydklfdaslkfakflasdkljadsfjknewarray  ");
        for (var i = 0; i < arsWords.length; i++) {
            arsWords[i] = arsWords[i].split("  newarrayindexaskldfaksfakdlfdjaklalkdkalnewarrayindex  ");
        }

        //    console.log("arsWords: ", arsWords);
        bKeywordslistpresent = true;
    } else if (requesttrans.job === "translationDoneFinishUp") {
        window.setInterval(function(){document.getElementById("noticeajax").style.display = "none"}, 500);
        //     console.log("for translation done finish up");
        //    console.log("Type: ", requesttrans.type, " text: ", requesttrans.text);
        if (requesttrans.type === "title") {
            sRequestTitle = requesttrans.text;
            bTitle = true;
        } else {
            sRequestBody = requesttrans.text;
            bBody = true;
        }
        if (bTitle && bBody) {
            console.log("title: ", sRequestTitle, " body: ", sRequestBody);
            var sEmails = "";
            var arEnd = [",", "\/", "!", "&", ":", "\"", "\'", "{", "}", "=", "\-", "(", ")", "“", "”", "¿", " "]; //THIS IS THE PART WHERE WE DEAL WITH EMAILS... YEAH VERY IMPORTANT
            var sStart = sRequestBody.length,
                sEnd, sSubstr, sEmail;
            for (var i = 0; i < sRequestBody.length; i++) {
                sEmail = "";
                if (sRequestBody.charAt(i) === "@") {
                    console.log("Found @ at: ", i);
                    while (arEnd.indexOf(sRequestBody.charAt(i)) === -1 && i >= 0) {
                        i--;
                    }
                    if (i < sStart) {
                        sStart = i;
                    }

                    console.log("New i: ", i, " Current Start: ", sStart);
                    i += 1;
                    while (arEnd.indexOf(sRequestBody.charAt(i)) === -1 && i < sRequestBody.length) {
                        sEmail += sRequestBody.charAt(i);
                        sEnd = i;
                        i++;
                    }
                    if (sEmails.indexOf(sEmail) === -1 && sEmail.indexOf(">")===-1 && sEmail.indexOf("<")===-1) {
                        sEmails += sEmail;
                        sEmails += " ";
                    }
                }
            }
            sEmails = sEmails.trim();
            sEmails = sEmails.split(" ");
            sSubstr = sRequestBody.substring(sStart, sEnd + 1).split(" ");
            if (sEmails.length === 2) { //THIS WILL WORK FOR NOW BUT WILL NEED TO BE FIXED AT SOME POINT... IT ONLY WORKS FOR 2 EMAILS RIGHT NOW...
                if (sSubstr.indexOf("to") > -1) {
                    sAns += sChangeEmail + "from " + sEmails[0] + " to " + sEmails[1] + sChangeEmail2;
                    printAnswer(sAns);
                    console.log(sEmails[0], " to ", sEmails[1]);
                } else {
                    sAns += sChangeEmail + "from " + sEmails[1] + " to " + sEmails[0] + sChangeEmail2;
                    printAnswer(sAns);
                    console.log(sEmails[1], " to ", sEmails[0]);
                }
                console.log("Final i: ", i, " sEmails: ", sEmails, " Substring: ", sRequestBody.substring(sStart, sEnd + 1));
            } else {
                sRequestTitle = sRequestTitle.replace(/(\r\n|\n|\r)/gm, " ");
                sRequestBody = sRequestBody.replace(/(\r\n|\n|\r)/gm, " ");
                sRequestBody = sRequestBody.replace("eg.", "");
                sRequestBody = sRequestBody.replace("ex.", " ");
                sRequestBody = sRequestBody.replace("...", " ");
                //sRequestBody = sRequestBody.replace("  ", " ");
                //console.log(sRequestBody);
                /*SPLIT BODY AT PERIODS*/
                // console.log("requestbody ", sRequestBody);
                //sRequestBody = sRequestBody.replace(/([.?!])\s*(?=[A-Z])/g, "\n")
                //console.log("requestbody ", sRequestBody);
                sRequestBody = sRequestBody.split(/[\\.!?]/);
                // console.log("requestbody ", sRequestBody);
                sRequestTitle = sRequestTitle.split(/[\\.!?]/);
                //console.log(sRequestBody);
                //console.log(sRequestTitle);
                //sRequestBody = sRequestBody.split(/[.?!]+/);
                //sRequestTitle = sRequestTitle.split(/[.?!]+/);
                /*GET RID OF PUNCTUATION*/
                for (var i = 0; i < sRequestBody.length; i++) {
                    sRequestBody[i] = sRequestBody[i].replace(/[,\/#!$%\^&\*;:\"\'’{}=\-_`~()“”¿]/g, "");
                    sRequestBody[i] = sRequestBody[i].trim();
                    sRequestBody[i] = sRequestBody[i].split(/[ ]+/);
                }
                for (var i = 0; i < sRequestBody.length; i++) {
                    for (var j = 0; j < sRequestBody[i].length; j++) {
                        sRequestBody[i][j] = sRequestBody[i][j].trim();
                    }
                    //sRequestBody[i] = sRequestBody[i].trim();
                }
                //   console.log("therequestbody, ", sRequestBody);
                for (var i = 0; i < sRequestTitle.length; i++) {
                    sRequestTitle[i] = sRequestTitle[i].replace(/[,\/#!$%\^&\*;:\"\'{}=\-_`~()¿]/g, "");
                    sRequestTitle[i] = sRequestTitle[i].trim();
                    sRequestTitle[i] = sRequestTitle[i].split(/[ ]+/);
                }
                console.log(sRequestBody);
                console.log(sRequestTitle);
                chrome.runtime.sendMessage({ action: "query", data: "keywords" }, function() { console.log("done done done so fkin done"); });
                /*SEARCH FOR KEYWORDS IN EACH SENTENCE*/
                //    console.log(sRequestTitle);
            }





        }

    }


    //console.log("final trans: ", document.getElementById("result_box").innerText); //[0].innerText
    /*            if (document.getElementById("spelling-correction").style.display != "none"){
                    console.log("dkaldfkadfakj uber ultra dankness");
                }else{
                    console.log("wth this is retarded.");
                }*/
    //src = requesttrans.string;
    /*document.getElementsByClassName("submit_btn").onclick() = function(){alert("kdafjakljsadlf")}
        

        var lol = document.getElementById("TicketPseudoReply").children

        lol.FwdButton.click()*/
    sendResponsetrans();
});

/*=====================================================================  PRINTANSWER FUNCTION  =====================================================================*/

function printAnswer(sAns) {
        console.log("Answer to print: ", sAns);
    var lol = document.getElementById("TicketPseudoReply").children;
    lol.FwdButton.click();
    var derp = document.getElementsByClassName("redactor_editor")[0].children;
    derp[1].children[2].innerText = sAns;

};

/*=====================================================================  TESTWORDS FUNCTION  =====================================================================*/

function testwords(arsKeyWords) {
    var sMaxLetterPos = Math.max(arsKeyWords.indexOf("queue"), arsKeyWords.indexOf("play"), arsKeyWords.indexOf("playlist"));
    console.log("doth this worketh");
    console.log("arsKeyWords: " + arsKeyWords);
    console.log(arsKeyWords.indexOf("internet"));
    console.log(arsKeyWords.indexOf("usage"));
    /*========  BUFFERING  ========*/
    if (arsKeyWords.indexOf("buffering") > -1 || arsKeyWords.indexOf("buffers") > -1) {
        console.log("dankbuffer");
        if (arsKeyWords.indexOf("constant") < arsKeyWords.indexOf("buffering") || arsKeyWords.indexOf("frequent") < arsKeyWords.indexOf("buffering") || arsKeyWords.indexOf("stuck") < arsKeyWords.indexOf("buffering") || (arsKeyWords.indexOf("buffers") > -1 && arsKeyWords.indexOf("forever") > arsKeyWords.indexOf("buffers")) || (arsKeyWords.indexOf("buffers") > -1 && arsKeyWords.indexOf("problem") > arsKeyWords.indexOf("buffers"))) {
            for (var i = 0; i < arsBuffering.length; i++) {
                if (i === 16) {
                    console.log(bLog);
                    if (!bLog) {
                        sAns += arsBuffering[i];
                    }
                } else {
                    sAns += arsBuffering[i];
                }

            }
            //console.log("hello");
            //LOOK FOR IN SAME ROOM, ACCROSS ROOM, RIGHT BESIDE EACH OTHER, ETC.        COULD BE IN A DIFFERENT SENTENCE.  MAKE EACH RESPONSE AN ARRAY, TOGGLE BTWN 1 AND 0, HAVE A FINAL PRINT FUNCTION...
            //printAnswer(sAns);
        }
        if (arsKeyWords.indexOf("loading") > -1) {
            sAns += "Just making sure here, are you stuck on the buffering screen or the loading screen?";
        }
    }



    /*========  FIREWALL BLOCKING VIDEOSTREAM  ========*/
    else if ((arsKeyWords.indexOf("firewall") > -1 && (Math.max(arsKeyWords.indexOf("blocking"), arsKeyWords.indexOf("blocks")) > arsKeyWords.indexOf("firewall") || arsKeyWords.indexOf("problem") > arsKeyWords.indexOf("firewall") || arsKeyWords.indexOf("blocked") > -1 || (arsKeyWords.indexOf("get") > -1 && arsKeyWords.indexOf("fixed") > arsKeyWords.indexOf("firewall")) || (arsKeyWords.indexOf("blocking") > -1 && arsKeyWords.indexOf("content") > -1) || arsKeyWords.indexOf("repair") > -1 && Math.max(arsKeyWords.indexOf("freezing"), arsKeyWords.indexOf("stuck"))) || (arsKeyWords.indexOf("help") > -1 && arsKeyWords.indexOf("with") > -1)) && !(Math.max(arsKeyWords.indexOf("phone"), arsKeyWords.indexOf("mobile"), arsKeyWords.indexOf("android"), arsKeyWords.indexOf("iphone")) > -1)) {
        console.log("dankfirewall");

        if ((arsKeyWords.indexOf("mac") > -1 || arsKeyWords.indexOf("osx") > -1 || (arsKeyWords.indexOf("os") > -1 && arsKeyWords[arsKeyWords.indexOf("os") + 1] === "x") || arsKeyWords.indexOf("macbook") > -1) && (!(arsKeyWords.indexOf("pc") > -1) || arsKeyWords.indexOf("not") < arsKeyWords.indexOf("pc")) && !(Math.max(arsKeyWords.indexOf("phone"), arsKeyWords.indexOf("mobile"), arsKeyWords.indexOf("android"), arsKeyWords.indexOf("iphone")) > -1)) {
            sAns += sFirewall;
            sAns += sFirewall2;
            for (var i = 1; i < arsFirewallMac.length; i++) {
                sAns += arsFirewallMac[i];
            }
        }
        if ((arsKeyWords.indexOf("pc") > -1 || arsKeyWords.indexOf("computer") > -1 || arsKeyWords.indexOf("windows") > -1) && (!(arsKeyWords.indexOf("mac") > -1) || arsKeyWords.indexOf("not") < arsKeyWords.indexOf("mac")) && (!(arsKeyWords.indexOf("pc") > -1) || arsKeyWords.indexOf("not") < arsKeyWords.indexOf("pc")) && !(Math.max(arsKeyWords.indexOf("phone"), arsKeyWords.indexOf("mobile"), arsKeyWords.indexOf("android"), arsKeyWords.indexOf("iphone")) > -1)) {
            sAns += sFirewall;
            sAns += sFirewall2;
            for (var i = 1; i < arsFirewallWindows.length; i++) {
                sAns += arsFirewallWindows[i];
            }
        } else {
            sAns += sFirewall;
            //sAns += sFirewall2;
            sAns += "I'm not sure whether you are using a PC or Mac, so I'll give you solutions for both: \n \n";
            sAns += "For Mac: \n"
            for (var i = 1; i < arsFirewallMac.length; i++) {
                sAns += arsFirewallMac[i];
            }
            sAns += "\nFor Windows:\n";
            for (var i = 1; i < arsFirewallWindows.length; i++) {
                sAns += arsFirewallWindows[i];
            }
        }
    }

    /*========  REFUND  ========*/
    else if (arsKeyWords.indexOf("refund") > -1 || (arsKeyWords.indexOf("money") > -1 && arsKeyWords[arsKeyWords.indexOf("money") + 1] === "back")) {
        console.log("dankrefund");
        sAns += sRefund;
    }

    /*========  UPGRADE TO LIFETIME  ========*/
    else if ((arsKeyWords.indexOf("upgrade") > -1 && arsKeyWords.indexOf("lifetime") > arsKeyWords.indexOf("upgrade")) || Math.max(arsKeyWords.indexOf("monthly"), arsKeyWords.indexOf("yearly"), arsKeyWords.indexOf("annual")) > -1 && arsKeyWords.indexOf("lifetime") > -1) {
        console.log("dankupgrade");
        sAns += sToLifetimeNoSale;
    }


    /*========  CANCEL SUBSCRIPTION  ========*/
    else if ((Math.max(arsKeyWords.indexOf("cancel"), arsKeyWords.indexOf("stop"), arsKeyWords.indexOf("end")) > -1 && (arsKeyWords.indexOf("subscription") > Math.max(arsKeyWords.indexOf("cancel"), arsKeyWords.indexOf("stop"), arsKeyWords.indexOf("end")) || arsKeyWords.indexOf("premium") > Math.max(arsKeyWords.indexOf("cancel"), arsKeyWords.indexOf("stop"), arsKeyWords.indexOf("end")) || arsKeyWords.indexOf("charge") > Math.max(arsKeyWords.indexOf("cancel"), arsKeyWords.indexOf("stop"), arsKeyWords.indexOf("end")))) || Math.max(arsKeyWords.indexOf("stop"), arsKeyWords.indexOf("end"), arsKeyWords.indexOf("cancel")) > -1 && arsKeyWords.indexOf("payment") > -1 || Math.max(arsKeyWords.indexOf("subscription"), arsKeyWords.indexOf("premium"), arsKeyWords.indexOf("membership"), arsKeyWords.indexOf("service")) > -1 && arsKeyWords.indexOf("cancel") > -1) {
        console.log("dankcancel");
        sAns += sCancelPremium;
    }
    //return sAns;

    /*========  PREMIUM FEATURES/UPGRADE  ========*/
    // else if  &&  {
    // console.log("dankpremium");
    else if (((arsKeyWords.indexOf("premium") > -1 || arsKeyWords.indexOf("subscription") > -1) && !(arsKeyWords.indexOf("ads") > -1)) && ((arsKeyWords.indexOf("not") > -1 && Math.max(arsKeyWords.indexOf("found"), arsKeyWords.indexOf("detected"), arsKeyWords.indexOf("detecting"), arsKeyWords.indexOf("recognized")) > -1) || (arsKeyWords.indexOf("greyed") > -1 && Math.max(arsKeyWords.indexOf("features"), arsKeyWords.indexOf("choices")) > -1) || (Math.max(arsKeyWords.indexOf("change"), arsKeyWords.indexOf("new"), arsKeyWords.indexOf("other")) > -1 && Math.max(arsKeyWords.indexOf("laptop"), arsKeyWords.indexOf("pc"), arsKeyWords.indexOf("computer")) > -1) || arsKeyWords.indexOf("doesnt") > -1 && arsKeyWords.indexOf("work") > -1 || arsKeyWords.indexOf("how") > -1 && arsKeyWords.indexOf("linked") > -1)) {
        console.log("premiumnotworking: ", arsKeyWords.indexOf("premium"), arsKeyWords.indexOf("subscription"), arsKeyWords.indexOf("not"))
        sAns += sPremiumNotWorking;
    } else if (((arsKeyWords.indexOf("premium") > -1 || arsKeyWords.indexOf("subscription") > -1) && !(arsKeyWords.indexOf("ads") > -1) && !(Math.max(arsKeyWords.indexOf("issue"), arsKeyWords.indexOf("problem")) > -1) && !(arsKeyWords.indexOf("subtitle") > -1) && !(arsKeyWords.indexOf("would") > -1 && arsKeyWords.indexOf("be") === arsKeyWords.indexOf("would") + 1)) && (arsKeyWords.indexOf("features") > -1 || arsKeyWords.indexOf("advantages") > -1 || arsKeyWords.indexOf("difference") > -1)) {
        console.log("sPremiumFeatures");
        sAns += sPremiumFeatures
    } else if ((((arsKeyWords.indexOf("premium") > -1 || arsKeyWords.indexOf("subscription") > -1) && !(arsKeyWords.indexOf("ads") > -1) && !(arsKeyWords.indexOf("subtitle") > -1) && !(Math.max(arsKeyWords.indexOf("audio"), arsKeyWords.indexOf("sound")) > -1) && !(arsKeyWords.indexOf("opensubtitles") > -1))) && (arsKeyWords.indexOf("how") > -1 || Math.max(arsKeyWords.indexOf("upgrade"), arsKeyWords.indexOf("pay"), arsKeyWords.indexOf("get")) > -1)) {
        console.log("sGetPremium");
        sAns += sGetPremium;
    } else if (((arsKeyWords.indexOf("premium") > -1 || arsKeyWords.indexOf("subscription") > -1)) && (Math.max(arsKeyWords.indexOf("image"), arsKeyWords.indexOf("ads")) > -1)) {
        console.log("sDisplayContentSuggestions");
        sAns += sDisplayContentSuggestions;
    }
    // else if (((arsKeyWords.indexOf("premium") > -1 || arsKeyWords.indexOf("subscription") > -1) && !(arsKeyWords.indexOf("ads") > -1)) && arsKeyWords.indexOf("new")>-1 && arsKeyWords.indexOf("computer")>-1) //else if (arsKeyWords.indexOf("email") > -1) {

    //     }

    //   }

    /*========  INSTALL CAST EXTENSION  ========*/
    else if ((arsKeyWords.indexOf("google") < arsKeyWords.indexOf("cast") && arsKeyWords.indexOf("google") > -1) || (arsKeyWords.indexOf("cast") > -1 && arsKeyWords.indexOf("extension") > -1)) {
        console.log("dankcast");
        sAns += sInstallCast;
    }

    /*========  VIDDIT  ========*/
    else if (arsKeyWords.indexOf("viddit") > -1) {
        console.log("dankviddit");
        sAns += sViddit;
    }

    /*========  ITUNES DRM  ========*/ //MAYBE MAKE ARRAY OF STUFF WITH DRM ON IT AND LOOP THROUGH?
    else if (arsKeyWords.indexOf("itunes") > -1 && arsKeyWords.indexOf("play") > -1) {
        console.log("dankdrm");
        sAns += sDRMiTunes;
    }

    /*========  AUDIO THROUGH HEADPHONES OR CHROMECAST AUDIO, VIDEO THROUGH CHROMECAST  ========*/
    else if (((Math.max(arsKeyWords.indexOf("audio"), arsKeyWords.indexOf("sound"), arsKeyWords.indexOf("listen")) > -1 && (arsKeyWords.indexOf("headphones") > -1 || Math.max(arsKeyWords.indexOf("computer"), arsKeyWords.indexOf("laptop")) > -1 || arsKeyWords.indexOf("phone") > -1 || (arsKeyWords.indexOf("chromecast") > -1 && arsKeyWords.indexOf("audio") > arsKeyWords.indexOf("chromecast"))))) || ((arsKeyWords.indexOf("connect") > -1 && arsKeyWords.indexOf("stereo") > -1 && arsKeyWords.indexOf("headphones") > -1))) {
        console.log("dankaudio");
        sAns += sHeadphoneAudio;
    }

    /*========  VIDEO BUT NO AUDIO  ========*/
    else if (((arsKeyWords.indexOf("no") > -1 || (Math.max(arsKeyWords.indexOf("doesnt"), arsKeyWords.indexOf("wont")) > -1 && Math.max(arsKeyWords.indexOf("cast"), arsKeyWords.indexOf("play")) > -1)) && (arsKeyWords.indexOf("audio") > arsKeyWords.indexOf("no") || arsKeyWords.indexOf("sound") > arsKeyWords.indexOf("no"))) || (Math.max(arsKeyWords.indexOf("sound"), arsKeyWords.indexOf("audio")) > -1 && arsKeyWords.indexOf("does") > -1 && arsKeyWords.indexOf("not") > -1 && arsKeyWords.indexOf("works") > -1)) {
        console.log("dankvideo");
        for (var i = 0; i < arsVideoNoAudio.length; i++) {
            if (i === 1) {
                if (!bLog) {
                    sAns += arsVideoNoAudio[i];
                }
            } else {
                sAns += arsVideoNoAudio[i];
            }

        }
    }
    /*========  SELECT MULTIPLE VIDEOS  ========*/
    else if (Math.max(arsKeyWords.indexOf("select"), arsKeyWords.indexOf("loading")) > -1 && Math.max(arsKeyWords.indexOf("multiple"), arsKeyWords.indexOf("several")) > Math.min(arsKeyWords.indexOf("select"), arsKeyWords.indexOf("loading")) && Math.max(arsKeyWords.indexOf("videos"), arsKeyWords.indexOf("episodes")) > Math.min(arsKeyWords.indexOf("multiple"), arsKeyWords.indexOf("several"))) {
        console.log("dankmultiple");
        sAns += sSelectMultipleVideos;
    }




    /*========  ANDROID APP SKIPPING BACK TO TOP  ========*/
    else if ((Math.max(arsKeyWords.indexOf("app"), arsKeyWords.indexOf("list")) > -1 && arsKeyWords.indexOf("back") > -1 && ((arsKeyWords.indexOf("top") > -1) || arsKeyWords.indexOf("beginnning") > Math.max(arsKeyWords.indexOf("app"), arsKeyWords.indexOf("list")))) || (Math.max(arsKeyWords.indexOf("repeated"), arsKeyWords.indexOf("constant"), arsKeyWords.indexOf("frequent")) > -1 && arsKeyWords.indexOf("scanning") > -1)) {
        console.log("dankandroidbug");
        sAns += sSearchBackToTop;
    }


    //console.log("alkdfjakljfakldfalkakjla");
    /*========  DVD  ========*/
    else if (arsKeyWords.indexOf("dvd") > -1 || arsKeyWords.indexOf("iso") > -1) {
        console.log("kdlfajdkjfaldfjakfjd0");
        sAns += sDVD;
    }


    /*========  VIDEOSTREAM WINDOWS APPLICATION  ========*/
    else if (arsKeyWords.indexOf("videostream") > -1 && (arsKeyWords.indexOf("windows") > -1 && arsKeyWords.indexOf("application") > arsKeyWords.indexOf("windows")) || arsKeyWords.indexOf("standalone") > -1) {
        console.log("wndowsapp");
        sAns += sWindowsApp;
    }
    /*========  VIDEOSTREAM RIGHT CLICK MENU  ========*/
    else if (arsKeyWords.indexOf("videostream") > -1 && arsKeyWords.indexOf("right") > -1 && arsKeyWords[arsKeyWords.indexOf("right") + 1] === "click") {
        console.log("dankrightclick");
        sAns += sWindowsRightClick;
    }




    /*========  RESOLUTION GRAINY  ========*/
    else if ((arsKeyWords.indexOf("resolution") > -1 || arsKeyWords.indexOf("video") > -1) && arsKeyWords.indexOf("grainy") > -1) {
        console.log("dankres");
        sAns += sBitrateProblem;
    }

    /*========  SIGN IN TAB OPENS VIDEOSTREAM  ========*/
    else if (arsKeyWords.indexOf("sign") > -1 && arsKeyWords.indexOf("in") === arsKeyWords.indexOf("sign") + 1 && (arsKeyWords.indexOf("tab") > arsKeyWords.indexOf("in") || arsKeyWords.indexOf("window") > arsKeyWords.indexOf("in")) && arsKeyWords.indexOf("open") > -1) {
        console.log("sSignInTabOpens");
        sAns += sSignInTabOpens;
    }
    /*========  COMPUTER SLEEP STOPS VIDEO  ========*/
    else if (arsKeyWords.indexOf("computer") > -1 && arsKeyWords.indexOf("sleep") > -1 && arsKeyWords.indexOf("stops") > -1 && arsKeyWords.indexOf("videos") > -1) {
        console.log(sComputerSleepsStopsVideo);
        sAns += sComputerSleepsStopsVideo;
    }
    /*========  ADD SUBTITLE FILES  ========*/
    else if (arsKeyWords.indexOf("add") > -1 && arsKeyWords.indexOf("subtitle") > arsKeyWords.indexOf("add") && !(arsKeyWords.indexOf("ads") > -1)) {
        console.log("sAddSubtitleFiles");
        sAns += sAddSubtitleFiles;
    }
    /*========  PLAYLIST SUPPORT  ========*/
    else if (((sMaxLetterPos > -1 && (arsKeyWords.indexOf("support") > sMaxLetterPos || arsKeyWords.indexOf("for") > sMaxLetterPos && arsKeyWords[arsKeyWords.indexOf("for") + 1] === "premium")) || (arsKeyWords.indexOf("videos") > arsKeyWords.indexOf("play") && arsKeyWords.indexOf("play") > -1) || (arsKeyWords.indexOf("multiple") > sMaxLetterPos && (arsKeyWords.indexOf("files") > arsKeyWords.indexOf("multiple") || arsKeyWords.indexOf("video") > arsKeyWords.indexOf("multiple") || arsKeyWords.indexOf("movie") > arsKeyWords.indexOf("multiple")))) && !(arsKeyWords.indexOf("subtitle") > -1) && !(arsKeyWords.indexOf("iphone") > -1)) {
        console.log("sPlaylistSupport");
        sAns += sPlaylistSupport;
    }
    /*========  PLAYLIST NOT WORKING  ========*/
    else if (arsKeyWords.indexOf("playlist") > -1 && Math.max(arsKeyWords.indexOf("not"), arsKeyWords.indexOf("wont")) > -1 && (Math.max(arsKeyWords.indexOf("working"), arsKeyWords.indexOf("showing")) > -1 || arsKeyWords.indexOf("show") > -1 && arsKeyWords[arsKeyWords.indexOf("show") + 1] === "up")) {
        console.log("playlist not working");
        for (var i = 0; i < arsPlaylistNotShowing.length; i++) {
            sAns += arsPlaylistNotShowing[i];
        }

    } else if (arsKeyWords.indexOf("playlist") > -1 && (Math.max(arsKeyWords.indexOf("phone"), arsKeyWords.indexOf("android"), arsKeyWords.indexOf("cell"), arsKeyWords.indexOf("smartphone"), arsKeyWords.indexOf("mobile")) > -1 && arsKeyWords.indexOf("app") > -1)) {
        console.log("playlist mobile app");
        sAns += sPlaylistMobile;
    }
    /*========  UPNP/DLNA  ========*/
    else if (arsKeyWords.indexOf("upnp") > -1 || arsKeyWords.indexOf("dlna") > -1) {
        console.log("sUPNPDLNA");
        sAns += sUPNPDLNA;
    }



    /*========  IOS LIKE ANDROID  ========*/
    else if ((arsKeyWords.indexOf("iphone") > -1 || arsKeyWords.indexOf("ios") > -1) && ((arsKeyWords.indexOf("android") > -1 || arsKeyWords.indexOf("android") > -1) || (Math.max(arsKeyWords.indexOf("video"), arsKeyWords.indexOf("media"), arsKeyWords.indexOf("browse")) > -1 && arsKeyWords.indexOf("library") > Math.max(arsKeyWords.indexOf("video"), arsKeyWords.indexOf("media"))) || arsKeyWords.indexOf("playlist") > -1 || (Math.max(arsKeyWords.indexOf("connect"), arsKeyWords.indexOf("pair")) > -1 && Math.max(arsKeyWords.indexOf("desktop"), arsKeyWords.indexOf("computer"), arsKeyWords.indexOf("pc"), arsKeyWords.indexOf("mac")) > -1)) || (Math.max(arsKeyWords.indexOf("iphone"), arsKeyWords.indexOf("ios")) > -1 && Math.max(arsKeyWords.indexOf("load"), arsKeyWords.indexOf("start"), arsKeyWords.indexOf("play"), arsKeyWords.indexOf("find")) > -1 && Math.max(arsKeyWords.indexOf("files"), arsKeyWords.indexOf("videos"), arsKeyWords.indexOf("movie"), arsKeyWords.indexOf("film")) > -1)) { // && ((arsKeyWords.indexOf("features") > -1 || arsKeyWords.indexOf("like") > -1)
        console.log("here butts lie");
        //if  {
        sAns += sIOSAndroid;
        //}
    }

    /*========  INTERNET USAGE  ========*/
    else if ((arsKeyWords.indexOf("internet") > -1 && arsKeyWords.indexOf("usage") > arsKeyWords.indexOf("internet")) || (arsKeyWords.indexOf("data") > -1 && arsKeyWords.indexOf("cap") > arsKeyWords.indexOf("data"))) {
        sAns += sDownloadCap;
        console.log("poop");
    }

    /*========  DELETED FILES STILL SHOWING UP  ========*/
    else if (Math.max(arsKeyWords.indexOf("deleted"), arsKeyWords.indexOf("removed")) > -1 && Math.max(arsKeyWords.indexOf("files"), arsKeyWords.indexOf("videos")) > -1 && arsKeyWords.indexOf("android") > -1) {
        for (var i = 0; i < arsDeletedOnAndroidStillThere.length; i++) {
            sAns += arsDeletedOnAndroidStillThere[i];
        }
        console.log("poossss");
    }
    /*========  PHONE VIDEOS ON SIDE WHEN VIEWED WITH VIDEOSTREAM  ========*/
    else if (Math.max(arsKeyWords.indexOf("iphone"), arsKeyWords.indexOf("android"), arsKeyWords.indexOf("phone")) > -1 && arsKeyWords.indexOf("videos") > -1 && arsKeyWords.indexOf("side") > -1) {
        console.log("sPhoneVideosOnSide");
        sAns += sPhoneVideosOnSide;
    }

    /*========  CHROMECAST EXTEND TIMEOUT  ========*/
    else if (arsKeyWords.indexOf("chromecast") > -1 && arsKeyWords.indexOf("extend") > -1 && arsKeyWords.indexOf("timeout") > arsKeyWords.indexOf("extend")) {
        console.log("sChromecastTimeout");
        sAns += sChromecastTimeout;
    }




    /*========  CONTENT SUGGESTIONS  ========*/
    else if (Math.max(arsKeyWords.indexOf("image"), arsKeyWords.indexOf("ads")) > -1 && arsKeyWords.indexOf("between") > Math.max(arsKeyWords.indexOf("image"), arsKeyWords.indexOf("ads")) && arsKeyWords.indexOf("videos") > Math.max(arsKeyWords.indexOf("image"), arsKeyWords.indexOf("ads"))) {
        console.log("sDisplayContentSuggestions");
        sAns += sDisplayContentSuggestions;
    } else if (Math.max(arsKeyWords.indexOf("ads")) > -1 && arsKeyWords.indexOf("opensubtitles") > -1) {
        console.log("opensubtitles ads");
        sAns += sOpenSubtitlesAds;
    } else if (arsKeyWords.indexOf("how") > -1 && Math.max(arsKeyWords.indexOf("make"), arsKeyWords.indexOf("create")) > -1 && arsKeyWords.indexOf("playlist") > -1) {
        console.log("make playlist");
        sAns += sHowToMakeAPlaylist;
    } else if ((Math.max(arsKeyWords.indexOf("subtitle"), arsKeyWords.indexOf("opensubtitles")) > -1 && ((Math.max(arsKeyWords.indexOf("not"), arsKeyWords.indexOf("stopped")) > -1 && Math.max(arsKeyWords.indexOf("loading"), arsKeyWords.indexOf("display"), arsKeyWords.indexOf("working"), arsKeyWords.indexOf("streaming")) > -1) || (arsKeyWords.indexOf("display") > -1 && Math.max(arsKeyWords.indexOf("correctly"), arsKeyWords.indexOf("right")) > -1) || (arsKeyWords.indexOf("cut") > -1 && arsKeyWords.indexOf("off") > -1) || arsKeyWords.indexOf("problem") > -1 && arsKeyWords[arsKeyWords.indexOf("problem") + 1] === "with") || arsKeyWords.indexOf("disappear") > -1) || ((Math.max(arsKeyWords.indexOf("opensubtitles"), arsKeyWords.indexOf("subtitle")) > -1) && Math.max(arsKeyWords.indexOf("wont"), arsKeyWords.indexOf("cant"), arsKeyWords.indexOf("couldnt"), arsKeyWords.indexOf("doesnt")) > -1 && Math.max(arsKeyWords.indexOf("load"), arsKeyWords.indexOf("find"), arsKeyWords.indexOf("play"), arsKeyWords.indexOf("works")) > -1) || (Math.max(arsKeyWords.indexOf("subtitle"), arsKeyWords.indexOf("opensubtitles")) > -1 && arsKeyWords.indexOf("no") > -1 && arsKeyWords.indexOf("files") > -1 && arsKeyWords.indexOf("have") > -1)) {
        console.log("here");
        //        for (var i = 0; i < arsSubtitlesNotLoading.length; i++) {
        //          sAns += arsSubtitlesNotLoading[i];
        //    }
        for (var i = 0; i < arsSubtitlesCutOff.length; i++) {
            sAns += arsSubtitlesCutOff[i];
        }
    } else if (arsKeyWords.indexOf("chromium") > -1 && ((arsKeyWords.indexOf("native") > -1 && arsKeyWords[arsKeyWords.indexOf("native") + 1] === 'client') || arsKeyWords.indexOf("nacl") > -1)) {
        //console.log("nacl");
        sAns += sNaClLinux;
        //console.log(sAns, " done");
    }

    /*========  CAST FILES FROM ANDROID  ========*/
    else if (Math.max(arsKeyWords.indexOf("cast"), arsKeyWords.indexOf("watch")) > -1 && Math.max(arsKeyWords.indexOf("videos"), arsKeyWords.indexOf("files")) > -1 && Math.max(arsKeyWords.indexOf("from"), arsKeyWords.indexOf("with")) > -1 && Math.max(arsKeyWords.indexOf("phone"), arsKeyWords.indexOf("android"), arsKeyWords.indexOf("cell"), arsKeyWords.indexOf("smartphone")) > -1) {
        sAns += sCastFromPhone;
    }

    /*========  .m2ts  ========*/
    else if (arsKeyWords.indexOf("m2ts") > -1) {
        console.log("m2ts");
        sAns += sM2TS;
    }

    /*========  AUDIO NORMALIZATION  ========*/
    else if (arsKeyWords.indexOf("audio") > -1 && arsKeyWords.indexOf("normalization") > -1) {
        sAns += sAudioNormalization;
    }

    /*========= OPENSUBTITLES NOT WORKING =========*/
    /*    else if ((arsKeyWords.indexOf("opensubtitles")>-1 || (arsKeyWords.indexOf("subtitle")>-1 && arsKeyWords.indexOf("web")>-1)) && Math.max(arsKeyWords.indexOf("wont"),arsKeyWords.indexOf("cant"), arsKeyWords.indexOf("couldnt"), arsKeyWords.indexOf("doesnt"))>-1 && Math.max(arsKeyWords.indexOf("load"), arsKeyWords.indexOf("find"), arsKeyWords.indexOf("play"), arsKeyWords.indexOf("works"))>-1){
            sAns+=sOpenSubtitlesBroken;
        }*/
    else if (Math.max(arsKeyWords.indexOf("uninstall"), arsKeyWords.indexOf("delete"), arsKeyWords.indexOf("remove")) > -1 && Math.max(arsKeyWords.indexOf("app"), arsKeyWords.indexOf("videostream"), arsKeyWords.indexOf("program")) > -1) {
        sAns += sUninstallInstructions;
    } else if (arsKeyWords.indexOf("subtitle") > -1 && (arsKeyWords.indexOf("change") > -1 && arsKeyWords.indexOf("size") > -1 || arsKeyWords.indexOf("smaller") > -1 || Math.max(arsKeyWords.indexOf("larger"), arsKeyWords.indexOf("bigger")) > -1)) {
        sAns += sSubtitleSize;
    } else if (arsKeyWords.indexOf("windows") > -1 && Math.max(arsKeyWords.indexOf("phone"), arsKeyWords.indexOf("mobile")) > -1 && Math.max(arsKeyWords.indexOf("app"), arsKeyWords.indexOf("program"), arsKeyWords.indexOf("videostream")) > -1) {
        sAns += sWindowsPhone;
    } else if (Math.max(arsKeyWords.indexOf("loop"), arsKeyWords.indexOf("repeat")) > -1 && arsKeyWords.indexOf("videos") > -1) {
        sAns += sRepeatVideos;
    } else if (Math.max(arsKeyWords.indexOf("google")) > -1 && Math.max(arsKeyWords.indexOf("credit"), arsKeyWords.indexOf("play")) > -1 && Math.max(arsKeyWords.indexOf("pay"), arsKeyWords.indexOf("buy"), arsKeyWords.indexOf("purchase")) > -1) {
        sAns += sGooglePlayCredit;
    }

    /*========  PHONE CAN'T FIND VIDEOSTREAM  ========*/
    else if ((Math.max(arsKeyWords.indexOf("phone"), arsKeyWords.indexOf("android"), arsKeyWords.indexOf("iphone"), arsKeyWords.indexOf("cell"), arsKeyWords.indexOf("smartphone"), arsKeyWords.indexOf("mobile")) > -1 || arsKeyWords.indexOf("videostream") > -1 && arsKeyWords[arsKeyWords.indexOf("videostream") + 1] === "mobile" || arsKeyWords.indexOf("mobile") > -1 && arsKeyWords[arsKeyWords.indexOf("mobile") + 1] === "app") && ((Math.max(arsKeyWords.indexOf("cant"), arsKeyWords.indexOf("cannot"), arsKeyWords.indexOf("doesnt")) > -1 && Math.max(arsKeyWords.indexOf("find"), arsKeyWords.indexOf("detect"), arsKeyWords.indexOf("connect"), arsKeyWords.indexOf("pair"), arsKeyWords.indexOf("sync")) > -1) || (arsKeyWords.indexOf("lose") > -1 && arsKeyWords.indexOf("connection") > -1)) && Math.max(arsKeyWords.indexOf("computer"), arsKeyWords.indexOf("pc"), arsKeyWords.indexOf("mac"), arsKeyWords.indexOf("chromebook"), arsKeyWords.indexOf("chromebox"), arsKeyWords.indexOf("macbook")) > -1) {
        sAns += sPhoneCantFindVideostream;
        sAns += sPhoneCantFindVideostream2;
        var bFound = false;
        if (Math.max(arsKeyWords.indexOf("pc"), arsKeyWords.indexOf("windows")) > -1) {
            sAns += sPhoneCantFindVideostream3;
            bFound = true;
        }
        if (Math.max(arsKeyWords.indexOf("mac"), arsKeyWords.indexOf("osx"), arsKeyWords.indexOf("macbook")) > -1) {
            sAns += sPhoneCantFindVideostream4;
            bFound = true;
        }
        if (Math.max(arsKeyWords.indexOf("linux"), arsKeyWords.indexOf("chromebook"), arsKeyWords.indexOf("chromebox"), arsKeyWords.indexOf("mint"), arsKeyWords.indexOf("fedora")) > -1) {
            sAns += sPhoneCantFindVideostream5;
            bFound = true;
        }
        if (arsKeyWords.indexOf("ubuntu") > -1) {
            sAns += sPhoneCantFindVideostream6;
            bFound = true;
        }
        if (bFound) {
            for (var i = 6; i < arsPhoneCantFindVideostream.length; i++) {
                sAns += arsPhoneCantFindVideostream[i];
            }
        } else {
            for (var i = 2; i < arsPhoneCantFindVideostream.length; i++) {
                sAns += arsPhoneCantFindVideostream[i];
            }
        }
    }


    /*========  CHROMECAST NOT IN DROPDOWN  ========*/
    else if ((arsKeyWords.indexOf("chromecast") > -1 && !(Math.max(arsKeyWords.indexOf("phone"), arsKeyWords.indexOf("mobile"), arsKeyWords.indexOf("iphone"), arsKeyWords.indexOf("android"), arsKeyWords.indexOf("cell"), arsKeyWords.indexOf("subtitle"), arsKeyWords.indexOf("opensubtitles")) > -1) && (arsKeyWords.indexOf("not") > -1 && Math.max(arsKeyWords.indexOf("found"), arsKeyWords.indexOf("dropdown")))) || (arsKeyWords.indexOf("cast") > -1 && arsKeyWords[arsKeyWords.indexOf("cast") - 1] === "no" && arsKeyWords[arsKeyWords.indexOf("cast") + 1] === "device") || (arsKeyWords.indexOf("chromecast") > -1 && arsKeyWords[arsKeyWords.indexOf("chromecast") - 1] === "no" && !(Math.max(arsKeyWords.indexOf("phone"), arsKeyWords.indexOf("mobile"), arsKeyWords.indexOf("iphone"), arsKeyWords.indexOf("android"), arsKeyWords.indexOf("cell"), arsKeyWords.indexOf("subtitle"), arsKeyWords.indexOf("opensubtitles")) > -1))) {
        console.log("nocastdevicesfound");
        for (var i = 0; i < arsNoCastFound.length; i++) {
            sAns += arsNoCastFound[i];
        }
        //sAns+= sNoCastFound;
    }

    /*PUT EVRYTHING ABOVE THIS ONE LDKFAJDKFLAJFADJF;AFAJG;LAFKGALJKGAJG*/

    /*========  STUCK ON LOADING SCREEN  ========*/
    else if (arsKeyWords.indexOf("loading") > -1 && !(arsKeyWords.indexOf("subtitle") > -1)) {
        console.log("dankloading");
        sAns += "Super sorry to hear your video is stuck on the loading screen!  A few things: \n 1. Is it just one or a few files that are doing this?  If so do you mind checking to see if it plays in VLC? \n 2. If you are having trouble with all of them, then it's probably a problem with your firewall.  \n \n";
        if ((arsKeyWords.indexOf("mac") > -1) && (!(arsKeyWords.indexOf("pc") > -1) || arsKeyWords.indexOf("not") < arsKeyWords.indexOf("pc"))) {
            for (var i = 0; i < arsFirewallMac.length; i++) {
                sAns += arsFirewallMac[i];
            }
        }
        if ((arsKeyWords.indexOf("pc") > -1 || arsKeyWords.indexOf("computer") > -1 || arsKeyWords.indexOf("windows") > -1) && (!(arsKeyWords.indexOf("mac") > -1) || arsKeyWords.indexOf("not") < arsKeyWords.indexOf("mac"))) {
            for (var i = 0; i < arsFirewallWindows.length; i++) {
                sAns += arsFirewallWindows[i];
            }
        } else {
            sAns += "Not sure whether you have a PC or a Mac, so I'm going to give you fixes for both of them :P \n \n"
            for (var i = 0; i < arsFirewallMac.length; i++) {
                sAns += arsFirewallMac[i];
            }
            sAns += "\n";
            for (var i = 0; i < arsFirewallWindows.length; i++) {
                sAns += arsFirewallWindows[i];
            }
        }
        sAns += "\nOne more thing to check, is that your Native Client is present and enabled.  You can find it in chrome://plugins \n"
    }

    console.log("done");

}

/*=====================================================================  CHECKFORKEYWORDS FUNCTION  =====================================================================*/
function checkifseenbefore(array) {
    var bFound;

    console.log("Question: ", arQuestions, " Answer: ", arAnswers);
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < arQuestions.length; j++) {
            if (array[i] === arQuestions[j][0]) {
                var bFound = false;
                var k = 0,
                    l = 0;
                while (k < arQuestions[j].length && (i + k) < array.length) {
                    if (array[i + k] === arQuestions[j][l]) {
                        k++;
                        l++;
                    } else {
                        k++;
                    }
                }
                if (k >= l && k >= arQuestions[j].length) {
                    bFound = true;
                }
            }
            if (bFound) {
                console.log("Found an answer...", arAnswers[j], " based on ", arQuestions[j]);
                sAns += arAnswers[j];
                break;
            }
        }
        if (bFound) {
            return;
        }
    }
    /*    for (var i = 1; i < arQuestions.length; i++) {
            for (var j = 0; j < array.length; j++) {
                console.log("arQuestions[i][0]: ", arQuestions[i][0], " array[j]: ", array[j]);
                if (array[j] === arQuestions[i][0]) {
                    console.log("found");
                    bFound = true;
                    for (var k = 0; k < array.length-j; k++) {
                        if ((array[j + k] != arQuestions[i][k]) || !((j + k) < array.length)) {
                            bFound = false;
                            break;
                        }
                    }
                }
                if (bFound) {
                    console.log("found an answer");
                    sAns += arAnswers[i];
                    break;
                }
            }if (bFound){
                    break;
            }
        }*/
};


function checkForKeyWords(arsTest) {
    console.log("arstest, ", arsTest);
    arsKeyWords = [];
    arsKeyTot = [];
    bCheck = false;
    //console.log(arsTest);
    //console.log("dank");
    for (var i = 0; i < arsTest.length; i++) {
        //if (sAns != "") {
        arsKeyWords = [];
        console.log("i, ", i);
        //}
        //bCheck = true;
        for (var j = 0; j < arsTest[i].length; j++) { //LOOP THROUGH EMAIL BODY
            console.log("j ", j);
            for (var k = 0; k < arsWords.length; k++) { //LOOP THROUGH KEYWORD ARRAY
                //console.log(k +" " +i+" "+j);
                if (arsWords[k].indexOf(arsTest[i][j]) > -1) {
                    //console.log("poo");
                    arsKeyWords.push(arsWords[k][0]);
                    break;
                }
            }
        }
        /*CHECK FOR FUCKTARDS WHO USE SPACES IN RANDOM WAYS*/
        for (var j = 0; j < arsKeyWords.length - 1; j++) {
            if (arsKeyWords[j] === "play") {
                if (arsKeyWords[j + 1] === "list") {
                    arsKeyWords[j] = "playlist";
                }
            }
            if (arsKeyWords[j] === "will") {
                if (arsKeyWords[j + 1] === "not") {
                    arsKeyWords[j] = "wont";
                }
            }
            if (arsKeyWords[j] === "not") {
                if (arsKeyWords[j + 1] === "available") {
                    arsKeyWords[j] = 'unavailable';
                }
            }

            if (arsKeyWords[j] === "get") {
                if (arsKeyWords[j + 1] === "rid") {
                    // if (arsKeyWords[j+2] === "of"){
                    arsKeyWords[j] = "delete";
                    // }
                }
            }
            if (arsKeyWords[j] === "not") {
                if (arsKeyWords[j + 1] === "able") {
                    arsKeyWords[j] = "cant";
                }
            }
            if (arsKeyWords[j] === "unable") {
                arsKeyWords[j] = "cannot";
            }
            if (arsKeyWords[j] === "video") {
                if (arsKeyWords[j + 1] === "stream") {
                    arsKeyWords[j] = "videostream";
                }
            }
            /*                else if (arsKeyWords[j] === "monthly" || arsKeyWords[j] === "yearly" || arsKeyWords[j] === "annual"){
                                    if (arsKeyWords[j+1] === "service"){
                                            arsKeyWords[j] = "subscription";
                                    }
                            }*/
        }
        if (arsKeyWords.length > 0) {
            console.log("Checking if seen before arsKeyWords: ", arsKeyWords);
            checkifseenbefore(arsKeyWords);
            testwords(arsKeyWords);
            arsKeyTot = arsKeyTot.concat(arsKeyWords);
            if (sAns.length > 0) {
                bCheck = true;
            }
            console.log("Answer - in check for keywords: ", sAns);
            //bCheck = true;
        } //else {
        // bCheck = false;
        // }
    }
    if (sAns.length === 0 || sAns === "Super sorry!  I don't quite understand your question!  Do you mind giving me a bit more information?  If possible, screenshots would be appreciated :) \n \n Cheers!") {
        console.log("checking if seen before, arsKeyTot: ", arsKeyTot);
        checkifseenbefore(arsKeyTot);
        testwords(arsKeyTot);
    }
    if (sAns.length > 0) {
        bCheck = true;
        return;
    }
/*    if (!bCheck){
      printAnswer(sAns);
    }*/
}
