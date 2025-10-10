---

sidebar_position: 5

---

# Settings

## App Settings

### Color Scheme

Currently, you can choose between **Dark**, **Light**, and **system**. The default and recommended setting is **system**. This is because some components in the current development framework are OS-provided and don't offer theme color settings, such as the search bar and quick pop-up menu. These components' theme colors are consistent with the OS. If the app's theme color doesn't match the OS's, these components may appear inconsistent. There's currently no solution for this issue, but I'll try to improve it later if an API is provided.


### Display lyrics remotely

In non-mixed output mode, the music information played by the App will be updated to the system's Now Playing Info Center. This module can be displayed on the lock screen, AirPlay screen, Bluetooth receiver, CarPlay screen, and iPod dock. These screens are collectively called remote screens.

After turning on this option, the lyrics information will be disguised as album information (the Now Playing module does not support lyrics) and updated in real time to these remote screens. The most common case is that you can see the lyrics on CarPlay and the lock screen of your phone.

Some devices are incompatible with this camouflage behavior and may experience strange phenomena such as screen flickering or counting. In this case, you can turn off this feature.

:::warning warning

For your safety, we strongly recommend that you turn this option off while driving.

:::

## Audio

### DoP

DoP is the abbreviation of DSD over PCM, which means encapsulating DSD data into PCM data for transmission.

When you play a DSD-encoded file, if DoP is enabled (default), the player will try to output it using DoP. If DoP is disabled, all DSD data will be converted to PCM data for output.

DoP output requires exclusive audio mode. If you enable the "mixing audio with other apps " option, DoP will be disabled by default. This is because in mixed output mode, the DoP data will be resampled and processed by the system, which will destroy the DoP data structure and the final audio output will be very light.

:::tip hint
To achieve DoP output, you must have an external digital-to-analog conversion module that supports DoP. Ordinary headphones do not support DoP.

The player cannot check whether the external DAC supports DoP. It only determines whether to output DoP by checking the current hardware sampling rate. If the hardware sampling rate is appropriate, the player will enable DoP; otherwise, it will output PCM. Therefore, this logic may fail on some DACs (the supported sampling rate is high enough, but DoP is not supported). In this case, please manually disable DoP.

Currently, iOS only supports DoP output of DSD64 and DSD128 (bandwidth limitation), so DSD higher than DSD128 will be converted to PCM output.

:::

### Mix audio with other app 

In the mixed mode, the audio output of your app is mixed with the audio of other apps, preventing interruption from other apps. For example, you can use the music playing in your app as background music while watching other videos. In this scenario, you may encounter the problem of the background music being too loud. This is because the volume of music files is generally adjusted to a high level for better sound quality. You can adjust the volume of the entire app to resolve this issue.

In mixed mode, DoP adn the system's **Now Playing** function will be disabled.



## Long content

This feature is designed for listening to audio content, such as audio books and podcasts. It is enabled by default. You can set the minimum length of long-form audio to suit your needs (the default is 10 minutes). The program uses this value to distinguish whether it is a long-form audio.

In long-form audio:

- The **previous** and **next** buttons on the player interface and remote screen will become forward and rewind progress functions. (More detailed and simple jump)
- The "music recognization" button will be replaced by the "Speed" button. (It's basically impossible to identify it, so playing at speed becomes a necessity in this case.)
- Lyrics will no longer be displayed. (It is impossible to get the correct lyrics)
- Long-form audio will automatically resume from the last playback point the next time it is played.
- The playback speed will be recorded in the playlist information.
- The sliding cover image still retains the previous and next song functions.

## Caching

The player core supports caching data to local storage when playing online audio. This feature can significantly reduce the start time when you play music repeatedly, save data bandwidth, and optimize the performance of online playback of certain formats.

This feature is enabled by default, with a maximum cache size of 1GB. Video caching is disabled by default to prevent large video files from overwriting audio files in the cache. If you frequently play videos, consider increasing the maximum cache size and enabling video caching.

:::tip hint
The caching function supports the standard HTTP cache protocol, extends the Samba protocol, and is customized and optimized for streaming media scenarios; the cache function does not consume your excess traffic.

Currently, the judgment of whether it is a video file is achieved through the extension name of the files. That is, when you play an mp4 file, the cache module will treat this file as a video, although this file may only contain audio.
:::

## History​

All your playback history will be stored in the playlist named history in order. By default, only the latest 20 are recorded. You can increase this value as needed. To prevent unexpected data usage when playing the history playlist, video files are not stored in the history by default. You can modify this value.

:::tip Best Practices
When you modify the maximum number of history records, please consider also modifying the maximum cache value. This ensures that almost no data is used when listening to history records, which is very useful when data needs to be paid.

:::

## Metadata

In some cases, when the program records incorrect song information (cover information), you can reset all information by clearing the metadata.

By default, the program will try to search online for song cover information and other information. This feature will use the metadata information of your songs to search. If you do not want to share this information, you can turn this feature off. This feature may also consume your traffic.

