# Quick start { #user-interface }

# Getting started

New device should be provisioned before it can be used. For more defails see [provisioning instructions][provisioning].

# Modes of operation

Once provisioned, the following modes are available 

| Display frame                                 | Mode descritption                                                       |
|-----------------------------------------------|-------------------------------------------------------------------------|
| ![img](res/img/ui/off.png){ width="192" }     | Fans are off<br/>RGBs are off                                           |
| ![img](res/img/ui/auto1.png){ width="192" }   | Fans speed is controlled automatically<br/>RGBs represent AQI level     |
| ![img](res/img/ui/manual1.png){ width="192" } | Fans speed is set manually<br/>RGBs represent AQI level                 |

# Using the encoder

Most of day to day interactions with _thecrbox_ happens using the encoder 

|                   ⇓ long press                    |                  ↓ short press                   |                    ↺ rotate                     |
|:-------------------------------------------------:|:------------------------------------------------:|:-----------------------------------------------:|
|  ![img](res/img/ui/hand-hold.png){ width="192" }  | ![img](res/img/ui/hand-click.png){ width="192" } | ![img](res/img/ui/hand-turn.png){ width="192" } |
| switch mode **_AUTO_** / **_MANUAL_** / **_OFF_** |              enter / confirm / next              |              change current value               |

Check [ui map][ui-map] for a complete guide on how to use the encoder.

# Advanced configuration with the webserver

Some more advanced options (like _PID_ configuration or RGB light scheme) can be configured using built-in webserver

# HomeAssistant integration

HomeAssistant integration is available via [ESPHome integration][https://www.home-assistant.io/integrations/esphome/]
