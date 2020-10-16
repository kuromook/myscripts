from  subprocess import call
import argparse
import os.path

parser = argparse.ArgumentParser()
parser.add_argument('arg1')
args = parser.parse_args()
title = args.arg1

call(f"magick convert ./{title}/jpg/* ./{title}/{title}.pdf")
if(os.path.exists(f"./{title}/keshi_jpg")):
    call(f"magick convert ./{title}/keshi_jpg/* ./{title}/keshi_{title}.pdf")
call(f"powershell New-Item -ItemType Directory -Force -Path archive")
call(f"powershell compress-archive -Path ./{title} -DestinationPath ./archive/{title}.zip -force")