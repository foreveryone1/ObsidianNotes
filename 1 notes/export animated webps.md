---
alias: converting
---
# Convert MP4 file to animated WEBP file in ffmpeg CLI

## 1. Install ffmpeg CLI through homebrew
In terminal.app, install ffmpeg through homebrew

```
brew install ffmpeg
```

Validate the installation:
```
which ffmpeg
```
Expect to see terminal returns the directory path of ffmpeg such as `/usr/local/bin/ffmpeg`

## 2. Set webp properties and convert

Example command which would convert an mp4 file to a lossless loop playing webp file in 20FPS with resolution 800px(width) * h600px(height):

```
ffmpeg -i input_filename.mp4 -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:600 output_filename.webp
```

Export an animated lossy WebP with preset mode picture：
```
ffmpeg -i input.mp4 -vcodec libwebp -filter:v fps=fps=20 -lossless 0  -compression_level 3 -q:v 70 -loop 1 -preset picture -an -vsync 0 -s 800:600 output.webp
```

### primary options: 
* set frame per second as 20: `-filter:v fps=fps=20`
* set output file lossless: `-lossless 1`
* set output webp file loop play: `-loop 0`. For non-loop, use `-loop 1`
* set rendering mode `-preset default` , can set as `picture`, `photo`, `text`, `icon`, `drawing` and `none` as needed. It would effect output file size. http://ffmpeg.org/ffmpeg-all.html#Options-28
* set output webp resolution as w800px * h600px `-s 800:600`

For more option details, please visit the [the ffmpeg libwebp documentation](http://ffmpeg.org/ffmpeg-all.html#libwebp)

This method should applicable for majority video formats including .mov, .avi, .flv, etc. as input files as well as .gif format as output file. 

[1 Install ffmpeg CLI through homebrew](export%20animated%20webps.md#1%20Install%20ffmpeg%20CLI%20through%20homebrew)


***