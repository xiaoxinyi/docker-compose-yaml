#!/bin/bash

# start sshd
/etc/init.d/ssh start

# jupyter
/opt/conda/envs/fastai/bin/python /opt/conda/envs/fastai/bin/jupyter-notebook --ip=0.0.0.0 --no-browser --allow-root --notebook-dir=/data
