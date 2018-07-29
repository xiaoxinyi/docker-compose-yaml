# Clone user in Ubuntu

> Create a new user from exsiting user, new user have and the old user
> have the same user groups.

1. create a shell script `cloneuser.sh` as follows:

```sh
#!/bin/bash
SRC=$1
DEST=$2

SRC_GROUPS=$(id -Gn ${SRC} | sed "s/${SRC} //g" | sed "s/ ${SRC}//g" | sed "s/ /,/g")
# echo $SRC_GROUPS
SRC_SHELL=$(awk -F : -v name=${SRC} '(name == $1) { print $7 }' /etc/passwd)
# echo $SRC_SHELL
useradd --groups ${SRC_GROUPS} --shell ${SRC_SHELL} --create-home ${DEST}

passwd ${DEST}
```

2. `sudo chmod a+x cloneuser.sh`

3. `sudo ./cloneuser.sh olduser newuser`

> Delete user from system.

```
sudo userdel username
sudo rm -rf /home/username
```
