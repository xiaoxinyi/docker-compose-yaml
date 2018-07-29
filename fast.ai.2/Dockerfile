FROM zl/dev-cuda9-fastai:6.7.c

EXPOSE 80 
EXPOSE 6006 
EXPOSE 8888 
EXPOSE 22
EXPOSE 8881
EXPOSE 8882
EXPOSE 8883
EXPOSE 8884
EXPOSE 8885
EXPOSE 8886
EXPOSE 8887
EXPOSE 8889

# CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--no-browser", "--allow-root"]
# CMD ["supervisord", "-c", "/etc/supervisord.conf"]
CMD ["/usr/local/bin/supervisord", "-c", "/etc/supervisord.conf"]