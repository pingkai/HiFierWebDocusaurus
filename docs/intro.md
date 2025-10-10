---
sidebar_position: 1
---

# About HiFier
The name of HiFier is HiFi + er, which means people who like to play high-fidelity music.

## HiFier's design goals
- **Cross-platform**: HiFier is currently developed using the [react-native](https://reactnative.dev/) framework, which provides basic support for cross-platform development. Currently, it supports iPhone, iPad, and Mac (based on iOS interface, non-native) platforms, and will support Android platforms in the near future.
Smooth user experience: smooth playback experience and UI experience.
Lower the threshold for using the player: try not to use more professional terms; automatically discover servers in the local area network, and let the program digest more professional and technical terms as much as possible.
- **Professional player, professional HiFi music player**: Eliminate any unnecessary intermediate steps during playback to present the most pristine sound: Any processing of audio data is lossy, including resampling, equalization, channel merging, etc. Currently, the player has removed any unnecessary steps during music playback to ensure the best sound quality. It also supports high-resolution audio. (There are plans to add an equalizer later to ensure that the original output is maintained even when the equalizer is turned off.)
- **Reduce user costs**: Currently, we support an unlimited number of cloud drives and accounts. Each cloud drive has a free capacity, and you can register multiple accounts and use them simultaneously. Cloud drives are the best storage solution, requiring no specialized knowledge and can be used anywhere with an internet connection. Because the player supports automatic caching, the next playback requires almost no data, and you don't need to manually download files for offline playback.
- **Considering advanced users**: Supports media server, DSD playback, and DoP output.
## HiFier's Current Capabilities
### 1. Media Format Support
Our design goal is to support all audio formats and common video formats. The player kernel uses [FFmpeg](https://www.ffmpeg.org/) , which can support the playback of almost all media formats.

So if you find that some audio formats are not supported during use, or files of this format are not displayed at all, please contact us and provide the corresponding files. We will provide support as soon as possible.

One exception is ISO files, which are actually images of CDs. We currently don't support them. These files are very large, and I personally feel that the user experience of this format is not very good, so we haven't support them yet. Supporting this format would incur additional development costs, but it doesn't seem to be very popular yet, so we haven't considered supporting it yet.

For video formats, common MP4, MKV, FLV, and TS formats are currently supported, as well as hardware and software decoding of HEVC and AVC. However, there is not much support for HDR videos. Currently, only standard HDR10 rendering is supported, and there is no adaptation for Dolby Vision.

### 2. Cloud Drive Support
Currently we support the following cloud Drives:

Google Drive (uncertified), Dropbox, OneDrive (Enterprise Edition not supported, requires certification), Box, Ali Pan, 115 Cloud Disk, Baidu Cloud Disk, pCloud.

From a technical perspective, accessing a cloud drive is very low cost. As long as the vendor's API isn't particularly unusual, it can be completed in one to two people's days. However, some cloud drives require certification.

All cloud drive access uses official APIs, and no APIs from any informal channels are used.

Currently, 115 Cloud Drive does not support logging in within the app, and you need to jump to the system browser.

### 3.File Server Support
Currently supports mounting of WebDAV and Samba file servers.

#### Samba
That is Windows file sharing. Due to its security issues, it is recommended to use it only in the local area network and not on the public network. This protocol is also designed for use in the local area network.

#### WebDAV
It uses the standard http protocol and supports both plain text and digest password authentication. This depends on the specific server. Since both methods are not very secure (plain text is the least secure), if possible, it is recommended to use the https protocol when using it on the public network.

FTP, NFS and other protocols are not popular at present and are not supported for the time being.

### 4. Media Server Support
HiFier was initially designed as a file server client, with media server support planned for the future. However, due to conflicts between the playlist and favorites features of the media server and those provided by HiFier itself, historical records, playlists, and favorites are not synced to the server and are only saved within the program. Currently, support for media servers is limited to reading content from the media server for playback and searching.

Therefore, the current media server is actually confined to HiFier, and it is not so intuitive to use; but it is not easy to solve this problem; I have also been planning whether to make a separate App to specifically support the media server, which should provide a better experience.

:::tip hint
It is recommended that all media servers use the https protocol if conditions permit to prevent server password leakage.

:::

Currently supported servers

#### EMBY and Jellyfin
These two servers actually use a set of APIs, so you can use either one when adding a server. This protocol supports LAN discovery, and HiFier can automatically discover servers in the LAN.

#### Subsonic API
Subsonic has stopped updating. **Navidrome** is currently the most widely used. Navidrome has some extensions to Subsonic's API, but I found that these extended APIs have no practical use, so I didn't use them.

The Subsonic API is an outdated design. The most obvious problem is that the client doesn't know whether the server has cover information for a particular song, and returns a default image when there are no image resources. This causes the client to download a large number of duplicate images and cannot use other images instead. The URL address of the image is related to the song ID, so even if it is the same album cover, it will be downloaded multiple times when displayed. The client has no way to reuse or cache images.

Navidrome has its own set of web APIs, and its own web client uses this set of APIs, but this set of APIs does not currently seem to have a significant improvement over the original APIs; and the author declares that this set of APIs is unstable and will change with the server version upgrade, and it is not public; in other words, this API is used to implement the web client that comes with its server and may be changed at any time. As a client independent of the server, HiFier is not suitable for using these APIs (although the APIs are not public, they are easy to know).

#### Synology AudioStation
Supports connection via quickConnect ID and address; AudioStation itself does not have a discovery protocol. The current implementation logic is: first discover Synology's samba, then determine whether it is Synology and whether AudioStation is installed. Therefore, if your Synology does not have samba enabled, the automatic discovery function of AudioStation cannot be used.

AudioStation's implementation is relatively weak. There is no way to query recently added features, and it does not record any playback history. However, it supports radio stations, which can be supported later.

### 5. CarPlay

Because driving isn't ideal for complex operations, CarPlay currently supports a relatively simple interface. I don't want anyone distracted by CarPlay. Currently, it supports direct playback of content from your download directory, history, favorites, and previously saved playlists, allowing for easy tap-to-play playback. It doesn't offer file or media server browsing capabilities. If you have any requirements for CarPlay, please confirm that this functionality is sufficiently simple before submitting feedback.

### 6. DoP output capability

Due to iOS system limitations, the current maximum output is DSD128. DSD samples above this sampling rate will be converted to PCM for output. Currently, the highest DSD decoded is DSD1024, but this may vary depending on the performance of the phone. Since the current Mac version uses the underlying iOS library, it does not support DSD output. If it need to output DSD on a Mac in the future, it will need to support the Mac system separately.

Android's DSD output capability should be higher than that of iOS. I will update it after I have a version that supports Android.