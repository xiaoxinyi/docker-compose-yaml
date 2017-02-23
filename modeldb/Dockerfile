FROM ubuntu:latest
COPY sources.list /etc/apt/
COPY resolv.conf /etc/
COPY installer.sh /
COPY quiet_installer.sh /
COPY interactive_installer.sh /
COPY add_dependencies_to_path.sh /
COPY start_modeldb.sh /
RUN quiet_installer.sh
RUN echo "Please run /interactive_installer.sh"
CMD /bin/bash
