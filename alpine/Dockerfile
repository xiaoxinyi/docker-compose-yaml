# zl/alpine-dev:10.26.b
FROM zl/alpine-dev:10.26.a

RUN apk add --update supervisor openssh && rm  -rf /tmp/* /var/cache/apk/*

RUN rm -rf /etc/ssh/ssh_host_rsa_key /etc/ssh/ssh_host_dsa_key

ADD supervisord.conf /etc/

ADD supervisord-sshd.conf /etc/supervisor/conf.d/

ADD run-sshd.sh /usr/local/bin/
RUN chmod a+x /usr/local/bin/run-sshd.sh


ENTRYPOINT ["supervisord", "--nodaemon", "--configuration", "/etc/supervisord.conf"]
