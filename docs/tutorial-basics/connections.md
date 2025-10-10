---

sidebar_position: 4

---

# connect

The main connect page is used for all operations related to files or media services connected to the player. This page can display automatically discovered services within the local network, currently supporting the automatic discovery capabilities of Samba, Jellyfin & EMBY, and Audio Station.

:::tip hint

The first time you open this page, it will automatically refresh the available services on the LAN. You can also refresh the discovery service by scrolling down. Samba's discovery service currently supports mDns (Bonjour) and NetBios protocols, covering both Apple and Windows devices. NAS devices generally have both services enabled by default. If your NAS is not discovered, or is discovered incorrectly, please check the relevant discovery service configuration. Audio Station does not have its own dedicated discovery service and currently relies on Synology's Samba discovery service. If you do not enable the NAS's Samba service, Audio Station will not be discovered.

:::

## File Picker

The FIle Picker allows you to select files outside the application and play them in the phone through the system **file** app.

:::tip hint

The system's file program can not only access files on your phone; you can manually add a Samba server; when some Cloud Drive clients are installed on your phone, most of them will mount their content to the file program by default, so through the file program, you can choose many types of files to play.

:::

:::warning Notice

Due to iOS system restrictions, apps cannot always hold unlimited access to external files. Abuse of this permission will result in the system prohibiting apps from selecting external files. Therefore, HiFier currently only holds access to files after you have just selected them. When you select new files, the previous access will be released. Therefore, files selected by the File Picker cannot be added to the playlist (because it is a temporary permission).

Some App will copy external files to their own program space after selecting them. The disadvantage of this is

1. Copying may require downloading data from the network, so copying is asynchronous and synchronous playback is not possible.
2. Takes up double the storage space

Currently, HiFier does not choose the solution of copying files. In subsequent versions, if there is a good solution, it may be optimized.

:::

## Imported Files

此方式是通过电脑直接向程序中添加文件，如何添加，请参考：

This method is to add files directly to the program through the computer. For how to add files, please refer to:

**Windows**: https://support.apple.com/guide/itunes/itns32636/windows

**Mac**: https://support.apple.com/120403

:::tip hint

This feature supports folder nesting

:::

:::warning Notice

This function can also delete files in the program. Please do not touch the default files and folders in the program. If you delete or modify them, it will cause the program to run abnormally. Do not use the same name as an existing file or folder.

:::

## Available Servers

Displays the files or media servers available in the local area network. When you use it for the first time, you will be asked to enter your username and password. After a successful login, the authentication information will be stored locally in the program; the saved password will be used by default next time you use it.

:::tip hint
The server names displayed are derived from LAN-related protocols and do not support renaming; login information will be bound to the server name or server ID, which means you do not need to set static IP addresses for these servers. After the server IP address changes, HiFier can still find the corresponding host and connect. (Only for LAN)

The LAN discovery service is a LAN broadcast protocol, so it only supports the discovery of servers under the same gateway. If your LAN has multiple gateways, it cannot support cross-gateway discovery. You can connect through a static IP address by **add a connection** .

:::


## Saved Connections

All manually added connections are displayed here. You can rename or delete the added connection. When you delete a connection, the login information will also be deleted. However, if this service supports LAN discovery, the login information may not be deleted, preventing you from being asked to enter the password again when using the automatic discovery service.

:::tip Notice
If you add a server found in the local area network, HiFier will match it with the server found in the local area network when possible. If the match is successful, you may not need to enter a password. However, it is recommended that the server added in this way has a static IP address.

:::


## Adding a Connection

Used to add any form of connection to the program, currently supporting cloud drives, file servers and media servers.

### Cloud Drives

Adding a cloud drive uses the standard Oauth2 protocol. After obtaining authorization, the program can obtain a token to access your files, so the program does not know your authentication information. After you delete the connection, the corresponding token will be deleted (some cloud disks support active revocation). You can also manually revoke any authorized program in the background of your corresponding cloud disk. After revocation, all authorized programs will no longer be able to access your cloud disk.

### Media Server and File Server

These two servers use a direct login method using your username and password, and the login information is saved to local storage.

:::tip hint

When you add a service, the default program will query the local storage for relevant login information. If you have entered login information in an available service, that login information will be used directly here. If you do not want to use the saved login information, you can open the login interface to log in **as new user** , so that you can log in to the same server as different users.

Leaving both the Samba server username and password blank means logging in as the Guest user. Currently, some NAS may not implement anonymous login in this way and may not support anonymous login (such as Huawei's NAS).

The server address input box currently supports complete addresses, so you don't have to break the complete address into pieces before filling it in. Your public IP shows the public IP of your current LAN. If you don't have a public IP, the IP displayed here will not be available.

:::

:::warning Notice
If you use a public IP address to connect within the local area network, the connection may fail. You can only connect successfully after switching to another network (5G). This is related to your home router. This connection method requires loopback protocol support, which is not supported by many small manufacturers or low-end routers. I use an ASUS router, which supports this protocol. Other routers are unknown.

:::