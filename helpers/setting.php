<?php

class MySettingsPage
{
    /**
     * Holds the values to be used in the fields callbacks
     */
    private $options;

    /**
     * Start up
     */
    public function __construct()
    {
        add_action( 'admin_menu', array( $this, 'add_plugin_page' ) );
        add_action( 'admin_init', array( $this, 'page_init' ) );
        $option_values = get_option( 'fvn_config' );
        $this->options1 = array(
            'kind_3'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="kind2"',
                'options' => ['Tên loại','giá tiền','va'],
                'label' => 'Thể loại'
            ],
            'stype_3'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype2 stt_1"',
                'options' => ['Loại','vt'],
                'label' => 'Phong cách thi công'
            ],
            'stype_4'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype2 stt_2"',
                'options' => ['Loại','giá'],
                'label' => 'Chủng loại gỗ'
            ],
            'stype_5'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype2 stt_3"',
                'options' => ['Loại','giá'],
                'label' => 'Trần thạch cao'
            ],
            'stt_4'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype2 stt_4"',
                'options' => ['Loại','giá'],
                'label' => 'Sơn bả'
            ],
            'stt_5'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype2 stt_5"',
                'options' => ['Loại','giá'],
                'label' => 'Giấy dán tường'
            ],
            'stt_6'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype2 stt_6"',
                'options' => ['Loại','giá'],
                'label' => 'Sàn gỗ'
            ],
            'stt_7'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype2 stt_7"',
                'options' => ['Loại','giá'],
                'label' => 'Rèm cửa'
            ],
            'stt_8'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype2 stt_8"',
                'options' => ['Loại','giá'],
                'label' => 'Thiết bị WC'
            ]
        );
        foreach($this->options1 as $key => &$option){
            $option['value'] = $option_values[$key];
        }

        $option_values = get_option( 'fvn_config_2' );
        $this->options2 = array(
            'kind_1'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="kind"',
                'options' => ['Tên loại','giá tiền'],
                'label' => 'Thể loại',
                'id' => 'kind_1'
            ],
            'stype'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype"',
                'options' => ['Loại','vt'],
                'label' => ' Phong cách thiết kế nội thất'
            ],
            'kind_2'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="kind"',
                'options' => ['Loại','giá'],
                'label' => 'Báo giá thiết kế kiến trúc - Thể loại',
                'id' => 'kind_2'
            ],
            'stype_2'=> [
                'type' => 'combo',
                'attr' => 'rows="5" class="stype2 stt_3"',
                'options' => ['Loại','giá'],
                'label' => 'Phong cách thiết kế kiến trúc',
                'id' => 'stype_2'
            ]            
        );
        foreach($this->options2 as $key => &$option){
            $option['value'] = $option_values[$key];
            
        }
    }

    /**
     * Add options page
     */
    public function add_plugin_page()
    {
        // This page will be under "Settings"
        add_options_page(
            'Cấu hình Báo giá', 
            'Cấu hình Báo giá', 
            'manage_options', 
            'fvn_config', 
            array( $this, 'create_admin_page' )
        );
    }

    /**
     * Options page callback
     */
    public function create_admin_page()
    {
        // Set class property
        
        ?>
        <div class="wrap">
            <h1>Cấu hình báo giá</h1>
            <form method="post" action="options.php">
            <?php
                // This prints out all hidden setting fields
                settings_fields( 'fvn_option_group' );
                do_settings_sections( 'fvn_config' );
                submit_button();
            ?>
            </form>
        </div>
        <?php
    }

    /**
     * Register and add settings
     */
    public function page_init()
    {        
        register_setting(
            'fvn_option_group', // Option group
            'fvn_config', // Option name
            array( $this, 'sanitize' ) // Sanitize
        );

        add_settings_section(
            'fvn_option_section_id', // ID
            'Cấu hình', // Title
            array( $this, 'print_section_info' ), // Callback
            'fvn_config' // Page
        );  

        add_settings_field(
            'fvn_config1', // ID
            'Báo giá thi công', // Title 
            array( $this, 'displayInput1' ), // Callback
            'fvn_config', // Page
            'fvn_option_section_id' // Section           
        );     

        add_settings_field(
            'fvn_config2', // ID
            'Báo giá thiết kế', // Title 
            array( $this, 'displayInput2' ), // Callback
            'fvn_config', // Page
            'fvn_option_section_id' // Section           
        );     
    }

    /**
     * Sanitize each setting field as needed
     *
     * @param array $input Contains all settings fields as array keys
     */
    public function sanitize( $input )
    {
        $new_input = $_POST['data'];
        // add_option('fvn_config',json_encode($_POST['data']));
        // update_option('fvn_config',json_encode($_POST['data']));
        return $new_input;
    }

    /** 
     * Print the Section text
     */
    public function print_section_info()
    {
        print '';
    }

    private function displayOption($options){
        echo '<table style="width:100%">';
        foreach($options as $key => $option){
            echo "<tr><td width='15%'>{$option['label']}</td><td>";
            switch ($option['type']){
                case 'textarea':
                    echo FvnHtml::textarea("data[{$key}]",$option['attr'],$option['value']);
                    break;
                case 'combo':
                    $option['attr'] .= 'placeholder="'.implode('|',$option['options']).'"';
                    echo FvnHtml::textarea("data[{$key}]",$option['attr'],$option['value']);
                    break;
                default :
                    echo FvnHtml::text("data[{$key}]",$option['attr'],$option['value']);
                    break;
            }
            echo '</td></tr>';
        }
        echo '</table>';
    }

    /** 
     * Get the settings option array and print one of its values
     */
    public function displayInput1()
    {
        echo '<style>textarea{width:100%;}</style>';
        $this->displayOption($this->options1);
        
    }
    public function displayInput2()
    {
        $this->displayOption($this->options2);        
    }

}

if( is_admin() )
    $my_settings_page = new MySettingsPage();