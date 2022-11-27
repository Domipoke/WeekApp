import 'package:flutter/material.dart';
import 'package:flutter_iconpicker/flutter_iconpicker.dart';
import '../blocks/DefaultAppBar.dart';

class AddNew extends StatefulWidget {
  static const String routes = "/addNew";
  const AddNew({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<AddNew> createState() => _AddNewState();
}

class _AddNewState extends State<AddNew> {
  String name = "";
  String type = "";
  Icon _icon = Icon(Icons.tv);
  _pickIcon() async {
    IconData? icon = await FlutterIconPicker.showIconPicker(context,
        iconPackModes: [IconPack.cupertino]);

    _icon = Icon(icon);
    setState(() {});

    debugPrint('Picked Icon:  $icon');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: DefaultAppBar(),
      body: Center(
          child: Column(
        children: [
          TextField(
            decoration: InputDecoration(label: Text("Name")),
            onChanged: (value) => setState(() {
              name = value;
            }),
          ),
          ElevatedButton(onPressed: _pickIcon, child: Icon(_icon))
        ],
      )),
    );
  }
}
