export default RowCard = (row) => {
  let num = row.num;
  let myTitle = num.toString();
  return (
    <Card
      title={myTitle}
      titleStyle={{ fontSize: 14 }}
      containerStyle={styles.container}
      wrapperStyle={styles.wrapper}
    >
      <View style={styles.detailWrapper}>
        <Text style={styles.text}>{row.text}</Text>
      </View>
    </Card>
  );
};

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 30,
    color: 'darkgray',
  },
  container: {
    backgroundColor: '#000',
    padding: 50,
  },
  wrapper: {
  },
};
