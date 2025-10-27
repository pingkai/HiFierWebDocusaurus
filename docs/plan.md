---

sidebar_position: 2

---

# Future overall upgrade plan

## Features not considered

HiFier is committed to ensuring that every feature we develop is meaningful, avoiding unnecessary feature bloat. Some feature requests are inherently pointless and may even have counterproductive effects, such as:

- **Audio upscaling function**: It is meaningless and will not improve the sound quality. On the contrary, it may cause the sound quality to deteriorate and consume CPU computing power.
- **PCM to DSD function**: Similar to the upsampling function; It is safe to assume that any peripheral supporting DSD also supports PCM.

There are also some features that, unless there are special circumstances, are not considered for implementation, and if they are to be implemented, they are the lowest priority:

- **Audio visualization**: The effects of most audio visualizations are not very good, and there is no sense of immersion. On the contrary, the effect is better when using only the volume. This function requires a lot of computing power, but the effect is dispensable. I feel that there are too few scenes of listening to music and watching this on a mobile phone. It may be useful when having a party on the TV。

For media servers, the current plan is to no longer add new media servers.

- **Plex** users can use the official app PlexAMP, which is already very good and also supports membership capabilities.

- **Music services of other NAS**: During the process of supporting Synology’s Audio Station, we found that they haven’t really focused much on it. Other NAS manufacturers might be even worse. Anyone familiar with NAS surely knows how to set up something like Jellyfin.

We prioritize features that may be upgraded in the future based on factors such as development difficulty, popularity, and user experience improvement:

## P1
~~### Openlist support~~ (AGPL license)

Openlist can mount many network disks through unofficial APIs, which can solve the problem of mounting network disks without open APIs.

I have tried to compile Alist before, but something went wrong. I don’t know whether the current Openlist can be compiled successfully or whether it is convenient to use. But in the worst case, we can just use Alist and it won’t be a big problem. For users like us, the network disk is full of songs, videos, etc., so it doesn’t matter if we don’t put important information in it.

Alist itself is difficult to use and may have various problems. I plan to support Alist without any support for its use, and in most cases, will not fix the problems of alist itself.

### display the Favorites of media server

In fact, this function is very common and many people need it. The problem that needs to be solved is

- Not every media server supports collection
- How to display collections needs to be studied. In many cases, users do not have any collections. If it is displayed under a tab, it is often empty at the beginning. Moreover, the collection capability of this software will not be synchronized to the server. Users need to collect it in other clients.

### Global Search

You can search the contents of files in all mounted cloud drives and media servers. The reason I haven't done this before is that WebDAV and Samba don't support searching.

WebDAV and Samba may not be supported after implementation.

### Equalizer Support

HiFier envisions an equalizer that goes beyond simple up-and-down adjustments on a single interface, since in most cases manual tweaks don’t yield optimal results. Our goal is to implement automatic equalizer settings tailored to each output device, and to ensure the equalizer is designed in a way that minimizes distortion and preserves sound quality.

In addition, the equalizer may only be one part of the post-processing process, and other audio post-processing should be considered, such as volume balancing, channel delay adjustment, left and right channel switching, etc.

## P2

### On the media server, the player interface displays content related to the current artist

Considering the code implementation and interaction issues, this is temporarily placed at P2.

### Android Platform Support

1. The player kernel is related to device compatibility. Android has a large number of mobile phone models, which will lead to high adaptation costs.
2. Currently, many components of react-native have issues related to the Android platform, so it may take a lot of time to fix bugs.
3. The Play Store is not available in mainland China, so how to distribute apps is a problem.

### LastFM Support 


## P3

### Radio stations supported by audio station

The default radio station has a small audience, and it is difficult to search for radio stations yourself. Iphones can also listen to radio stations.

### Built-in scraper

The mobile phone is not suitable for scraping

- Energy and time consumption
- Some network storage services limit the number of files that can be requested.
- Unable to update in time
- Consumes storage space.
