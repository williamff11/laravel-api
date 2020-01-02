TYPE=TRIGGERS
triggers='CREATE DEFINER=`mysql.sys`@`localhost` TRIGGER sys_config_insert_set_user BEFORE INSERT on sys_config FOR EACH ROW BEGIN IF @sys.ignore_sys_config_triggers != true AND NEW.set_by IS NULL THEN SET NEW.set_by = USER(); END IF; END' 'CREATE DEFINER=`mysql.sys`@`localhost` TRIGGER sys_config_update_set_user BEFORE UPDATE on sys_config FOR EACH ROW BEGIN IF @sys.ignore_sys_config_triggers != true AND NEW.set_by IS NULL THEN SET NEW.set_by = USER(); END IF; END'
sql_modes=0 0
definers='mysql.sys@localhost' 'mysql.sys@localhost'
client_cs_names='utf8' 'utf8'
connection_cl_names='utf8_general_ci' 'utf8_general_ci'
db_cl_names='utf8_general_ci' 'utf8_general_ci'
<<<<<<< HEAD
created=157765285763 157765285779
=======
created=157770900880 157770900899
>>>>>>> 5ac175d489d2f63aa78697bca7aee11b333682d6
