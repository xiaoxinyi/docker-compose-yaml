# coding:utf-8
from __future__ import with_statement
from fabric.api import *
import os


@task
def run_140():
    env.hosts = ['sxkj@192.168.199.140:22', 'sxkj@192.168.199.249:22']
    env.passwords = {'sxkj@192.168.199.140:22': 'sx',
                     'sxkj@192.168.199.249:22': 'sx'}
    env.sudo_passwords = {'sxkj@192.168.199.140:22': 'sx'}


@task
def run_test():
    run('whoami')


@task
def run_deploy():
    with cd('/home/sxkj/zhangli'):
        run('mkdir -p mac-docker-compose-yml')
        put('./*', './mac-docker-compose-yml')
        # with lcd('..'):
        #     local('tar cvf simplek8s.tar simplek8s')

        #     local('pwd')
        #     print(os.getcwd())
        #     put('simplek8s.tar', 'simplek8s.tar')
        #     local('rm -rf simplek8s.tar')
        #put('./simplek8s.tar', 'simplek8s.tar')


if __name__ == '__main__':
    execute(run_140)
    execute(run_deploy)
