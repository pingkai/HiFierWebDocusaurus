---

sidebar_position: 2

---

# Future overall upgrade plan

## Features not considered

Every feature we develop should be as meaningful as possible. We develop it carefully so that users can use it comfortably. Some features will never be implemented. Such requirements themselves have no meaning and may even cause counterproductive effects. They may just be used for advertising, for example:

- **Audio upscaling function**: It is meaningless and will not improve the sound quality. On the contrary, it may cause the sound quality to deteriorate and consume CPU computing power.
- **PCM to DSD function**: Similar to the upsampling function; I believe that peripherals that support DSD must also support PCM.

There are also some features that, unless there are special circumstances (such as my current cognitive problems), are not considered for implementation, and if they are to be implemented, they are the lowest priority:

- **Audio visualization**: The effects of most audio visualizations are not very good, and there is no sense of immersion. On the contrary, the effect is better when using only the volume. This function requires a lot of computing power, but the effect is dispensable. I feel that there are too few scenes of listening to music and watching this on a mobile phone. It may be useful when having a party on the TV。

For media servers, the current plan is to no longer add new media servers.

- **Plex** users can use the official app PlexAMP, which is already very good and also supports membership capabilities.

- **Music services of other NAS**: I am not interested in supporting new ones at the moment. When I was supporting Synology's audio station, I found that they did not actually put their energy into this. Other NAS manufacturers may do even worse. Friends who play with NAS must know how to follow Jellyfin or something like that.

We prioritize features that may be upgraded in the future based on factors such as development difficulty, popularity, and user experience improvement:

## P1
### Openlist support

Openlist can mount many network disks through unofficial APIs, which can solve the problem of mounting network disks without open APIs.

I have tried to compile Alist before, but something went wrong. I don’t know whether the current Openlist can be compiled successfully or whether it is convenient to use. But in the worst case, we can just use Alist and it won’t be a big problem. For users like us, the network disk is full of songs, videos, etc., so it doesn’t matter if we don’t put important information in it.

Alist itself is difficult to use and may have various problems. My plan is to support alist without any support for its use, and in most cases will not fix the problems of alist itself.

### display the Favorites of media server

In fact, this function is very common and many people need it. The problem that needs to be solved is

- Not every media server supports collection
- How to display collections needs to be studied. In many cases, users do not have any collections. If it is displayed under a tab, it is often empty at the beginning. Moreover, the collection capability of this software will not be synchronized to the server. Users need to collect it in other clients.

### Global Search

You can search the contents of files in all mounted cloud drives and media servers. The reason I haven't done this before is that WebDAV and Samba don't support searching, unless the client traverses all the directory structures and saves them. I don't think this solution is good.

WebDAV and Samba may not be supported after implementation.

### Equalizer Support

Equalizer support will take some time. I hope to make an equalizer that is not just an interface for you to pull up and down, which is actually meaningless and in most cases the results will probably not be good. I want to automatically set the equalizer for the output device. And then how to make the equalizer well and ensure that the sound is not broken as much as possible.

In addition, the equalizer may only be one part of the post-processing process, and other audio post-processing should be considered, such as volume balancing, channel delay adjustment, left and right channel switching, etc.

## P2

### On the media server, the player interface displays content related to the current artist

The reason for placing it in p2 is mainly due to code implementation and interaction issues. Currently, the player page is global, and the app itself supports multiple account logins. The logical connection here may require a better mechanism to do it.

Another issue is UI interaction. What should I do after clicking on the singer's details? If it is displayed in the player interface and can be returned, then the navigation logic of the current code needs to be significantly modified.

### Android Platform Support

Reasons for placing it on p2:

1. The player kernel is related to device compatibility. Android has a large number of mobile phone models, which will lead to high adaptation costs and require purchasing many mobile phones for testing.
2. Currently, many components of react-native have issues related to the Android platform, so it may take a lot of time to fix bugs.
3. The Play Store is not available in mainland China, so how to distribute apps is a problem.

### LastFM Support 


## P3

### Radio stations supported by audio station

The default radio station has a small audience, and it is difficult to search for radio stations yourself. Iphones can also listen to radio stations, but a recording function can be added.

### Built-in scraper

The mobile phone is not suitable for scraping

- Energy and time consumption
- Some network storage services limit the number of files that can be requested.
- Unable to update in time
- Consumes storage space.