
@echo off
Robocopy "C:\Users\sh1\AppData\Roaming" "D:\backup\editor" .spacemacs
Robocopy "C:\Users\sh1\AppData\Roaming\.emacs.d" "D:\backup\editor\.emacs.d" /MIR /FFT /Z  /W:5
Robocopy "C:\tool\cmder" "D:\backup\cmder" /MIR /FFT /Z  /W:5
Robocopy "C:\Users\sh1\.vscode" "D:\backup\.vscode" /MIR /FFT /Z  /W:5
Robocopy "C:\Users\sh1\AppData\Roaming\Blender Foundation\Blender" "D:\backup\Blender" /MIR /FFT /Z  /W:5
Robocopy "C:\tool\blender-2.79-windows64\2.79\scripts" "D:\backup\scripts" /MIR /FFT /Z  /W:5
Robocopy "C:\tool\jtk379" "D:\backup\jtk379" /MIR /FFT /Z  /W:5
Robocopy "C:\tool\Autohotkey" "D:\backup\Autohotkey" /MIR /FFT /Z  /W:5