<?php
include CEDO_OPTIONS_PATH_FULL . '/pages/options.php';
include CEDO_OPTIONS_PATH_FULL . '/pages/printer.php';

global $wpdb;

//save on button press
if (isset($_POST['save_options'])) {
    $options = array();
    foreach($_POST as $key=>$val) {
        if(substr($key, 0,5) !== "cedo_") {
            continue;
        }
        cedo_set_option($key, (isset($_POST[$key]) && $_POST[$key] !== "") ? $_POST[$key] : "");
    }
}
?>

<!--<div class="plugin-settings-block wrap iflext_admin_subscriber wchk" id="iflext_news_subs_sms_send">
    <form method="POST" action="">
        <div class="plugin-title-block">
            <span class="iflext_sms_icon32"></span>
            <span class="plugin-title"><?php echo CEDO_OPTIONS_MAIN_NAME; ?></span>
        </div>

        <div style="float:left;width: 880px;" class="wrap iopt_settings" id="poststuff">
            <div style="border: 1px solid #D5D2D2;" id="app_settings" class="postbox">
                <h3 style="margin:0px 0px 20px 0px; " class="hndle"><span style="font: 13px arial,times new roman,sans-serif,serif;">Home Page Settings</span></h3>
                <table style="padding:0px 5px;">
                    <tbody>
                        <?php
                        if (isset($settings) && !empty($settings)) {
                            foreach ($settings as $key => $value) {

                                if (!isset($value['suboption'])) { ?>

                                    <tr>
                                        <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span style="float: left; width: 201px;"><?php echo $value['labelname']; ?>:</span></td>
                                        <td><?php
                                            $key = $value['name'];
                                            (cedo_get_option($key) == '' ? $value['dvalue'] : $value['dvalue'] = cedo_get_option($key));

                                            echo drawInputfeild($value['type'], $value['id'], $value['name'], $value['dvalue'], $value);
                                            ?>
                                        </td>
                                        <td style="float:left;margin-right:15px;color:#919090;"><?php echo $value['labeldesc'] ?></td>
                                    </tr>

                                    <?php } else { ?>
                                    <tr> 
                                        <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span><?php echo $value['labelname']; ?>:</span></td>
                                        <td>
                                        </td>
                                        <td style="float:left;margin-right:15px;color:#919090;"><?php echo $value['labeldesc'] ?></td>
                                    </tr>
                                        <?php foreach ($value['suboption'] as $__value) { ?>
                                        <tr>
                                            <td style="float:left;margin-right:15px;">&nbsp;</td>
                                            <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span><?php echo $__value['suboption']; ?>:</span></td>
                                            <td><?php
                                                $key = $__value['name'];
                                                (cedo_get_option($key) == '' ? $__value['dvalue'] : $__value['dvalue'] = cedo_get_option($key));
                                                echo drawInputfeild($__value['type'], $__value['id'], $__value['name'], $__value['dvalue']);
                                                ?>
                                            </td>
                                            <td style="float:left;margin-right:15px;color:#919090;"><?php echo $__value['labeldesc'] ?></td>
                                        </tr><?php
                                            }
                                        }
                                    }
                                }
                                ?> 
                        <tr>
                            <td style="float:left;margin-left:15px;"></td>
                            <td>
                                <input type="submit" class="button" name="save_options" value="Save" style="width:70px;float:right;margin:10px 0px 5px 0;border-radius: 3px 3px 3px 3px;"><span style="font: 12px arial,times new roman,sans-serif,serif;float: right; margin: 13px;"></span>
                                <div class="loading_icon" style="display: none; margin: 14px 15px;"></div>
                            </td>
                            <td style="float:right;margin-right:15px;">
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>

    </form>
</div>-->




<div class="plugin-settings-block wrap iflext_admin_subscriber wchk" id="iflext_news_subs_sms_send">
    <form method="POST" action="">
        

        <div style="float:left;width: 880px;" class="wrap iopt_settings" id="poststuff">
            <div style="border: 1px solid #D5D2D2;" id="app_settings" class="postbox">
                <h3 style="margin:0px 0px 20px 0px; " class="hndle"><span style="font: 13px arial,times new roman,sans-serif,serif;">Contact Settings</span></h3>
                <table style="padding:0px 5px;">
                    <tbody>
                        <?php
                        if (isset($contact) && !empty($contact)) {
                            foreach ($contact as $key => $value) {

                                if (!isset($value['suboption'])) { ?>

                                    <tr>
                                        <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span style="float: left; width: 201px;"><?php echo $value['labelname']; ?>:</span></td>
                                        <td><?php
                                            $key = $value['name'];
                                            (cedo_get_option($key) == '' ? $value['dvalue'] : $value['dvalue'] = cedo_get_option($key));

                                            echo drawInputfeild($value['type'], $value['id'], $value['name'], $value['dvalue'], $value);
                                            ?>
                                        </td>
                                        <td style="float:left;margin-right:15px;color:#919090;"><?php echo $value['labeldesc'] ?></td>
                                    </tr>

                                    <?php } else { ?>
                                    <tr> 
                                        <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span><?php echo $value['labelname']; ?>:</span></td>
                                        <td>
                                        </td>
                                        <td style="float:left;margin-right:15px;color:#919090;"><?php echo $value['labeldesc'] ?></td>
                                    </tr>
                                        <?php foreach ($value['suboption'] as $__value) { ?>
                                        <tr>
                                            <td style="float:left;margin-right:15px;">&nbsp;</td>
                                            <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span><?php echo $__value['suboption']; ?>:</span></td>
                                            <td><?php
                                                $key = $__value['name'];
                                                (cedo_get_option($key) == '' ? $__value['dvalue'] : $__value['dvalue'] = cedo_get_option($key));
                                                echo drawInputfeild($__value['type'], $__value['id'], $__value['name'], $__value['dvalue']);
                                                ?>
                                            </td>
                                            <td style="float:left;margin-right:15px;color:#919090;"><?php echo $__value['labeldesc'] ?></td>
                                        </tr><?php
                                            }
                                        }
                                    }
                                }
                                ?> 
                        <tr>
                            <td style="float:left;margin-left:15px;"></td>
                            <td>
                                <input type="submit" class="button" name="save_options" value="Save" style="width:70px;float:right;margin:10px 0px 5px 0;border-radius: 3px 3px 3px 3px;"><span style="font: 12px arial,times new roman,sans-serif,serif;float: right; margin: 13px;"></span>
                                <div class="loading_icon" style="display: none; margin: 14px 15px;"></div>
                            </td>
                            <td style="float:right;margin-right:15px;">
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>

    </form>
</div>


<!--<div class="plugin-settings-block wrap iflext_admin_subscriber wchk" id="iflext_news_subs_sms_send">
    <form method="POST" action="">
        

        <div style="float:left;width: 880px;" class="wrap iopt_settings" id="poststuff">
            <div style="border: 1px solid #D5D2D2;" id="app_settings" class="postbox">
                <h3 style="margin:0px 0px 20px 0px; " class="hndle"><span style="font: 13px arial,times new roman,sans-serif,serif;">Header Images of Pages</span></h3>
                <table style="padding:0px 5px;">
                    <tbody>
                        <?php
                        if (isset($header_img) && !empty($header_img)) {
                            foreach ($header_img as $key => $value) {

                                if (!isset($value['suboption'])) { ?>

                                    <tr>
                                        <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span style="float: left; width: 201px;"><?php echo $value['labelname']; ?>:</span></td>
                                        <td><?php
                                            $key = $value['name'];
                                            (cedo_get_option($key) == '' ? $value['dvalue'] : $value['dvalue'] = cedo_get_option($key));

                                            echo drawInputfeild($value['type'], $value['id'], $value['name'], $value['dvalue'], $value);
                                            ?>
                                        </td>
                                        <td style="float:left;margin-right:15px;color:#919090;"><?php echo $value['labeldesc'] ?></td>
                                    </tr>

                                    <?php } else { ?>
                                    <tr> 
                                        <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span><?php echo $value['labelname']; ?>:</span></td>
                                        <td>
                                        </td>
                                        <td style="float:left;margin-right:15px;color:#919090;"><?php echo $value['labeldesc'] ?></td>
                                    </tr>
                                        <?php foreach ($value['suboption'] as $__value) { ?>
                                        <tr>
                                            <td style="float:left;margin-right:15px;">&nbsp;</td>
                                            <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span><?php echo $__value['suboption']; ?>:</span></td>
                                            <td><?php
                                                $key = $__value['name'];
                                                (cedo_get_option($key) == '' ? $__value['dvalue'] : $__value['dvalue'] = cedo_get_option($key));
                                                echo drawInputfeild($__value['type'], $__value['id'], $__value['name'], $__value['dvalue']);
                                                ?>
                                            </td>
                                            <td style="float:left;margin-right:15px;color:#919090;"><?php echo $__value['labeldesc'] ?></td>
                                        </tr><?php
                                            }
                                        }
                                    }
                                }
                                ?> 
                        <tr>
                            <td style="float:left;margin-left:15px;"></td>
                            <td>
                                <input type="submit" class="button" name="save_options" value="Save" style="width:70px;float:right;margin:10px 0px 5px 0;border-radius: 3px 3px 3px 3px;"><span style="font: 12px arial,times new roman,sans-serif,serif;float: right; margin: 13px;"></span>
                                <div class="loading_icon" style="display: none; margin: 14px 15px;"></div>
                            </td>
                            <td style="float:right;margin-right:15px;">
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

        </div>

    </form>
</div>-->

<!--<div class="plugin-settings-block wrap iflext_admin_subscriber wchk" id="iflext_news_subs_sms_send">
    <form method="POST" action="">

        <div style="float:left;width: 880px;" class="wrap iopt_settings" id="poststuff">
            <div style="border: 1px solid #D5D2D2;" id="app_settings" class="postbox">
                <h3 style="margin:0px 0px 20px 0px; " class="hndle"><span style="font: 13px arial,times new roman,sans-serif,serif;">Settings - Footer</span></h3>
                <table style="padding:0px 5px;">
                    <tbody>
                        <?php
                        if (isset($settings_footer) && !empty($settings_footer)) {
                            foreach ($settings_footer as $key => $value) {

                                if (!isset($value['suboption'])) { ?>

                                    <tr>
                                        <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span style="float: left; width: 201px;"><?php echo $value['labelname']; ?>:</span></td>
                                        <td><?php
                                            $key = $value['name'];
                                            (cedo_get_option($key) == '' ? $value['dvalue'] : $value['dvalue'] = cedo_get_option($key));

                                            echo drawInputfeild($value['type'], $value['id'], $value['name'], $value['dvalue'], $value);
                                            ?>
                                        </td>
                                        <td style="float:left;margin-right:15px;color:#919090;"><?php echo $value['labeldesc'] ?></td>
                                    </tr>

                                    <?php } else { ?>
                                    <tr> 
                                        <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span><?php echo $value['labelname']; ?>:</span></td>
                                        <td>
                                        </td>
                                        <td style="float:left;margin-right:15px;color:#919090;"><?php echo $value['labeldesc'] ?></td>
                                    </tr>
                                        <?php foreach ($value['suboption'] as $__value) { ?>
                                        <tr>
                                            <td style="float:left;margin-right:15px;">&nbsp;</td>
                                            <td style="float:left;margin-top: 5px;margin-left:15px;font: 13px arial,sanfserif,serif,Times New Roman;color: #636363;"><span><?php echo $__value['suboption']; ?>:</span></td>
                                            <td><?php
                                                $key = $__value['name'];
                                                (cedo_get_option($key) == '' ? $__value['dvalue'] : $__value['dvalue'] = cedo_get_option($key));
                                                echo drawInputfeild($__value['type'], $__value['id'], $__value['name'], $__value['dvalue']);
                                                ?>
                                            </td>
                                            <td style="float:left;margin-right:15px;color:#919090;"><?php echo $__value['labeldesc'] ?></td>
                                        </tr><?php
                                            }
                                        }
                                    }
                                }
                                ?> 
                        <tr>
                            <td style="float:left;margin-left:15px;"></td>
                            <td>
                                <input type="submit" class="button" name="save_options" value="Save" style="width:70px;float:right;margin:10px 0px 5px 0;border-radius: 3px 3px 3px 3px;"><span style="font: 12px arial,times new roman,sans-serif,serif;float: right; margin: 13px;"></span>
                                <div class="loading_icon" style="display: none; margin: 14px 15px;"></div>
                            </td>
                            <td style="float:right;margin-right:15px;">
                            </td>
                        </tr> 

                    </tbody>
                </table>

            </div>

        </div>

    </form>
</div>-->

<?php /*
<div style="float: left; width: 63%; margin:0 auto;address" class="wrap iflext_admin_subscriber wchk" id="iflext_news_subs_sms_send">
    <form action="" method="post">
        <div style="float:left;width: 880px;" class="wrap iopt_settings" id="poststuff"> <!--style="width: 611px; float: left; margin-left: 20%;" -->
            <div style="border: 1px solid #D5D2D2;" id="app_settings" class="postbox">
                <h3 style="margin:0px 0px 20px 0px; " class="hndle"><span style="font: 13px arial,times new roman,sans-serif,serif;">Settings - Home Slider</span></h3>
                <div class="main_form_box vb_slider_parents">
                    <div class="main_form_ttl"></div>  
                    <div class="colpsimg downimg"></div>
                    <div class="main_form_box_content botm_slider_images" style="display: block;">
                        <div class="slider_image_pool" style="float:left;width:100%">
                            <div class="main_form_box_content_sub">
                                <div class="form_content_p">
                                    <div class="form_content_box mg_slider_div_url">
                                        <input type="hidden" value="" class="mg_slider_input_url" name="abtpage_ads[image][url]"/>
                                        <img class="mg_slider_icon_url" src="<?php echo get_template_directory_uri() . '/images/ResponsiveSlider/middle_slider1-13.jpg'; ?>" style="max-width:99%;max-height: 262px;"/>
                                    </div>    
                                </div>
                            </div>  
                        </div>

                    </div>
                    <div class="main_form_box_content" style="background: none repeat scroll 0% 0% transparent; border: medium none; display: block; float: left; padding: 10px; width: 96%;">
                        <input type="submit" value="Save Changes" class="button button-primary mg_vb_slider_btn_add" id="submit" name="save_options" style="float:right;">
                    </div>
                    </form>
                </div>
            </div>
        </div>
 * 
 */
?>

<script type="text/javascript">
    var img_uploadPath = '<?php echo trailingslashit(get_bloginfo('wpurl')) . 'wp-admin/' ?>';
    var slider_img_url_ui = null;
    var slider_input_url_ui = null;
    
    jQuery(document).ready(function() {
        jQuery('.upload_image_button').live('click', function() {
//            slider_img_url_ui = jQuery(this);
            slider_input_url_ui = jQuery(this).parent().find('.upload_image.bimage');
            jQuery(this).removeClass('error');
            jQuery(this).attr('title', '');
            tb_show('', 'media-upload.php?post_id=1&amp;type=image&amp;TB_iframe=true');
            return false;
        });

        window.send_to_editor = function(html) {
            imgurl = jQuery('img', html).attr('src');
            if (typeof imgurl === 'undefined') {
                imgurl = jQuery(html).attr('href');
            }
//            slider_img_url_ui.attr('src', imgurl);
            slider_input_url_ui.val(imgurl);
            tb_remove();
        };
    });
</script>