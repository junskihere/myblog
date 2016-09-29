# myblog
cd mymeteorapp
meteor build tarball
cp tarball/mymeteorapp.tar.gz ~/path/to/mylocalnodeapp
rm tarball/mymeteorapp.tar.gz
cd ~/path/to/mylocalnodeapp

# for Mac or BSD-based
tar -xvf mymeteorapp.tar.gz -s '/^bundle//'

# for Linux, or using GNU tar
tar -xvf mymeteorapp.tar.gz --transform 's|^bundle/||'

rm mymeteorapp.tar.gz
git add --all
git commit -a -m 'meteor-openshift'
git push
