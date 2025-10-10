---

sidebar_position: 4

---

# connect

The main connect page is used for all operations related to files or media servers connected to the player. This page can display automatically discovered services within the local network, currently supporting the automatic discovery capabilities of Samba, Jellyfin & EMBY, and Audio Station.

:::tip hint

The first time you open this page, it will automatically refresh the available servers on the LAN. You can also refresh the discovery service by scrolling down. Samba's discovery service currently supports mDNS (Bonjour) and NetBios protocols, covering both Apple and Windows devices. NAS devices generally have both services enabled by default. If your NAS is not discovered, or is discovered incorrectly, please check the relevant discovery service configuration. Audio Station does not have its own dedicated discovery service and currently relies on Synology's Samba discovery service. If you do not enable the NAS's Samba service, Audio Station will not be discovered.

:::

## File Picker

The File Picker allows you to select files outside the application and play them on the device through the system **File** app.

:::tip hint

The system's File App can not only access files on your device; you can also manually add a Samba server. When some Cloud Drive clients are installed on your phone, most of them will mount their content to the file program by default, so through the file program, you can choose many types of files to play. It works on macOS.
:::

:::warning Notice

Due to iOS system restrictions, apps cannot always hold unlimited access to external files. Abuse of this permission will result in the system prohibiting apps from selecting external files. Therefore, HiFier currently only holds access to files after you have just selected them. When you select new files, the previous access will be released. Therefore, files selected by the File Picker cannot be added to the playlist (because it is a temporary permission).

Some App will copy external files to their own program space after selecting them. The disadvantage of this is

1. Copying may require downloading data from the network, so copying is asynchronous and synchronous playback is not possible.
2. Takes up double the storage space

Currently, HiFier does not offer the option to copy files. In subsequent versions, if there is a good solution, it may be optimized.

:::

## Imported Files

This method involves adding files directly to the program through the computer. For how to add files, please refer to:

**Windows**: https://support.apple.com/guide/itunes/itns32636/windows

**Mac**: https://support.apple.com/120403

:::tip hint

This feature supports folder nesting

:::

:::warning Notice

This function can also delete files in the App. Please do not touch the default files and folders in the App. If you delete or modify them, it will cause the App to run abnormally. Do not use the same name as an existing file or folder.

:::

## Available Servers

Displays the files or media servers available in the local area network. When you use it for the first time, you will be asked to enter your username and password. After a successful login, the authentication information will be stored locally in the App; the saved password will be used by default next time you use it.

:::tip hint
The server names displayed are derived from LAN-related protocols and do not support renaming; login information will be bound to the server name or server ID, which means you do not need to set static IP addresses for these servers. After the server IP address changes, HiFier can still find the corresponding host and connect. (Only for LAN)

The LAN discovery service is a LAN broadcast protocol, so it only supports the discovery of servers under the same gateway. If your LAN has multiple gateways, it cannot support cross-gateway discovery. You can connect through a static IP address by **Add connection**.

:::


## Saved Connections

All manually added connections are displayed here. You can rename or delete the added connection. When you delete a connection, the login information will also be deleted. However, if this server supports LAN discovery, the login information may not be deleted, preventing you from being asked to enter the password again when using the automatic discovery service.

:::tip Notice
If you add a server in the local area network, HiFier will match it with the server found in the local area network when possible. If the match is successful, you may not need to enter a password. However, it is recommended that the server added in this way has a static IP address.

:::


## Adding a Connection

Used to add any form of connection to the App, currently supporting cloud drives, file servers and media servers.

### Cloud Drives

Adding a cloud drive uses the standard OAuth2 protocol. After obtaining authorization, the App can obtain a token to access your files, so the program does not know your authentication information. After you delete the connection, the corresponding token will be deleted (some cloud disks support active revocation). You can also manually revoke any authorized program in the dashboard of your corresponding cloud drive. After revocation, the authorized App will no longer be able to access your cloud drive.

### Media Server and File Server

These two servers use a direct login method using your username and password, and the login information is saved to local storage in the App.

:::tip hint

When you add a server, App will query the local storage for relevant login information first. If you have entered login information in an available server, that login information will be used directly here. If you do not want to use the saved login information, you can turn on the login interface to log in **Login new user**, so that you can log in to the same server as a different user.

Leaving both the Samba server username and password blank means logging in as the Guest user. Currently, some NAS may not implement anonymous login in this way, so it may not support anonymous login for those devices for now (such as Huawei's NAS).

The server address input box currently supports complete addresses, so you don't have to break the complete address into pieces before filling it in. Your public IP shows the public IP of your current LAN. If you don't have a public IP, the IP displayed here will not be available.

:::

:::warning Notice
If you use a public IP address to connect within the local area network, the connection may fail. You can only connect successfully after switching to another network (e.g. 5G). This is related to your home router. This connection method requires loopback protocol support, which is not supported by many small manufacturers or low-end routers. I use an ASUS router, which supports this protocol. Other routers are unknown.

:::
